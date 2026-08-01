const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const { chatLimiter } = require('../middleware/rateLimiter');
const { processRAGQuery } = require('../rag/ragPipeline');
const { getFullUserDocuments } = require('../services/documentService');
const { 
  getUserChats, 
  getChatById, 
  createOrUpdateChat, 
  updateMessageFeedback, 
  updateChatTitle, 
  deleteChat 
} = require('../services/chatService');
const { sendSuccess, sendError } = require('../utils/responseHandler');
const { cleanPrompt } = require('../utils/sanitizer');

// POST /chat - Process prompt with RAG pipeline and stream back answer
router.post('/chat', authMiddleware, chatLimiter, async (req, res, next) => {
  try {
    const { prompt, chatId, stream = true } = req.body;
    const sanitizedPrompt = cleanPrompt(prompt);

    if (!sanitizedPrompt) {
      return sendError(res, 'Prompt cannot be empty', 400);
    }

    // Retrieve active user documents for vector RAG retrieval
    const documents = await getFullUserDocuments(req.user.id);

    if (stream) {
      // Process and stream output directly via SSE
      const result = await processRAGQuery({
        query: sanitizedPrompt,
        documents,
        res
      });

      // Save complete conversation record after stream ends
      await createOrUpdateChat({
        userId: req.user.id,
        chatId,
        userMessage: sanitizedPrompt,
        assistantMessage: result.answer,
        sources: result.sources
      });
    } else {
      // Non-streaming response fallback
      const result = await processRAGQuery({
        query: sanitizedPrompt,
        documents,
        res: null
      });

      const chat = await createOrUpdateChat({
        userId: req.user.id,
        chatId,
        userMessage: sanitizedPrompt,
        assistantMessage: result.answer,
        sources: result.sources
      });

      return sendSuccess(res, { chat, answer: result.answer, sources: result.sources });
    }
  } catch (err) {
    if (!res.headersSent) {
      return sendError(res, err.message, 500);
    }
  }
});

// GET /history - Retrieve conversation list
router.get('/history', authMiddleware, async (req, res, next) => {
  try {
    const chats = await getUserChats(req.user.id);
    return sendSuccess(res, chats, 'Chat history retrieved');
  } catch (err) {
    return sendError(res, err.message, 500);
  }
});

// GET /history/:id - Retrieve specific conversation thread
router.get('/history/:id', authMiddleware, async (req, res, next) => {
  try {
    const chat = await getChatById(req.user.id, req.params.id);
    return sendSuccess(res, chat, 'Chat session retrieved');
  } catch (err) {
    return sendError(res, err.message, 404);
  }
});

// PATCH /history/:id/title - Rename conversation title
router.patch('/history/:id/title', authMiddleware, async (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title || !title.trim()) {
      return sendError(res, 'Title cannot be empty', 400);
    }
    const updated = await updateChatTitle(req.user.id, req.params.id, title.trim());
    return sendSuccess(res, updated, 'Title updated successfully');
  } catch (err) {
    return sendError(res, err.message, 400);
  }
});

// DELETE /history/:id - Delete conversation session
router.delete('/history/:id', authMiddleware, async (req, res, next) => {
  try {
    await deleteChat(req.user.id, req.params.id);
    return sendSuccess(res, { id: req.params.id }, 'Chat deleted successfully');
  } catch (err) {
    return sendError(res, err.message, 404);
  }
});

// POST /chat/:id/feedback - Submit message 👍 / 👎 rating
router.post('/chat/:id/feedback', authMiddleware, async (req, res, next) => {
  try {
    const { messageId, feedback } = req.body;
    if (!['up', 'down', null].includes(feedback)) {
      return sendError(res, 'Feedback must be "up", "down", or null', 400);
    }
    await updateMessageFeedback(req.user.id, req.params.id, messageId, feedback);
    return sendSuccess(res, { messageId, feedback }, 'Feedback submitted');
  } catch (err) {
    return sendError(res, err.message, 400);
  }
});

module.exports = router;
