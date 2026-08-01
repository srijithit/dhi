const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/upload');
const { processAndUploadDocument, getUserDocuments, deleteDocument } = require('../services/documentService');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// POST /upload - Ingest file into RAG index
router.post('/upload', authMiddleware, upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) {
      return sendError(res, 'No file attached or unsupported file type', 400);
    }
    const document = await processAndUploadDocument(req.user.id, req.file);
    return sendSuccess(res, document, 'Document uploaded and indexed into vector RAG engine successfully', 201);
  } catch (err) {
    return sendError(res, err.message, 500);
  }
});

// GET /documents - Fetch all uploaded documents for user
router.get('/documents', authMiddleware, async (req, res, next) => {
  try {
    const docs = await getUserDocuments(req.user.id);
    return sendSuccess(res, docs, 'Documents retrieved successfully');
  } catch (err) {
    return sendError(res, err.message, 500);
  }
});

// DELETE /document/:id - Delete uploaded document
router.delete('/document/:id', authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteDocument(req.user.id, id);
    return sendSuccess(res, { id }, 'Document deleted successfully');
  } catch (err) {
    return sendError(res, err.message, 404);
  }
});

module.exports = router;
