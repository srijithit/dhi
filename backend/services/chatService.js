const Chat = require('../models/Chat');
const { isMemoryMode } = require('../config/db');

// In-memory chat storage fallback
const memoryChats = [];

function generateTitle(prompt) {
  if (!prompt) return 'New Conversation';
  const clean = prompt.replace(/[^\w\s]/g, '').trim();
  const words = clean.split(/\s+/);
  if (words.length <= 5) return clean || 'New Conversation';
  return words.slice(0, 5).join(' ') + '...';
}

async function getUserChats(userId) {
  if (isMemoryMode()) {
    return memoryChats
      .filter(c => String(c.userId) === String(userId))
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }
  return await Chat.find({ userId }).sort({ updatedAt: -1 });
}

async function getChatById(userId, chatId) {
  if (isMemoryMode()) {
    const chat = memoryChats.find(c => (c._id === chatId || c.id === chatId) && String(c.userId) === String(userId));
    if (!chat) throw new Error('Chat session not found');
    return chat;
  }
  const chat = await Chat.findOne({ _id: chatId, userId });
  if (!chat) throw new Error('Chat session not found');
  return chat;
}

async function createOrUpdateChat({ userId, chatId, userMessage, assistantMessage, sources = [] }) {
  const timestamp = new Date();

  if (isMemoryMode()) {
    let chat = memoryChats.find(c => (c._id === chatId || c.id === chatId) && String(c.userId) === String(userId));
    if (!chat) {
      chat = {
        _id: 'chat_' + Date.now(),
        id: 'chat_' + Date.now(),
        userId,
        title: generateTitle(userMessage),
        messages: [],
        createdAt: timestamp,
        updatedAt: timestamp
      };
      memoryChats.push(chat);
    }

    chat.messages.push({
      messageId: 'msg_' + Date.now() + '_1',
      role: 'user',
      content: userMessage,
      timestamp
    });

    chat.messages.push({
      messageId: 'msg_' + Date.now() + '_2',
      role: 'assistant',
      content: assistantMessage,
      contextSources: sources,
      timestamp
    });

    chat.updatedAt = timestamp;
    return chat;
  }

  let chat;
  if (chatId) {
    chat = await Chat.findOne({ _id: chatId, userId });
  }

  if (!chat) {
    chat = new Chat({
      userId,
      title: generateTitle(userMessage),
      messages: []
    });
  }

  chat.messages.push({
    messageId: 'msg_' + Date.now() + '_1',
    role: 'user',
    content: userMessage,
    timestamp
  });

  chat.messages.push({
    messageId: 'msg_' + Date.now() + '_2',
    role: 'assistant',
    content: assistantMessage,
    contextSources: sources,
    timestamp
  });

  await chat.save();
  return chat;
}

async function updateMessageFeedback(userId, chatId, messageId, feedback) {
  if (isMemoryMode()) {
    const chat = memoryChats.find(c => (c._id === chatId || c.id === chatId) && String(c.userId) === String(userId));
    if (!chat) throw new Error('Chat not found');
    const msg = chat.messages.find(m => m.messageId === messageId || m._id === messageId);
    if (msg) msg.feedback = feedback;
    return true;
  }

  const chat = await Chat.findOne({ _id: chatId, userId });
  if (!chat) throw new Error('Chat not found');

  const msg = chat.messages.find(m => m.messageId === messageId || m._id.toString() === messageId);
  if (msg) {
    msg.feedback = feedback;
    await chat.save();
  }
  return true;
}

async function updateChatTitle(userId, chatId, title) {
  if (isMemoryMode()) {
    const chat = memoryChats.find(c => (c._id === chatId || c.id === chatId) && String(c.userId) === String(userId));
    if (!chat) throw new Error('Chat not found');
    chat.title = title;
    return chat;
  }

  const chat = await Chat.findOne({ _id: chatId, userId });
  if (!chat) throw new Error('Chat not found');
  chat.title = title;
  await chat.save();
  return chat;
}

async function deleteChat(userId, chatId) {
  if (isMemoryMode()) {
    const index = memoryChats.findIndex(c => (c._id === chatId || c.id === chatId) && String(c.userId) === String(userId));
    if (index === -1) throw new Error('Chat not found');
    memoryChats.splice(index, 1);
    return true;
  }

  const result = await Chat.deleteOne({ _id: chatId, userId });
  if (result.deletedCount === 0) throw new Error('Chat not found');
  return true;
}

module.exports = {
  getUserChats,
  getChatById,
  createOrUpdateChat,
  updateMessageFeedback,
  updateChatTitle,
  deleteChat,
  memoryChats
};
