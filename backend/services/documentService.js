const fs = require('fs');
const path = require('path');
const Document = require('../models/Document');
const { createChunks } = require('../rag/chunker');
const { generateEmbeddings } = require('../rag/embeddings');
const { isMemoryMode } = require('../config/db');

// In-memory document storage fallback
const memoryDocuments = [];

async function extractTextFromFile(filePath, mimeType) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.pdf') {
    try {
      const pdfParse = require('pdf-parse');
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      return data.text || '';
    } catch (e) {
      console.warn('[PDF Extract Warning] PDF parsing fallback:', e.message);
      return fs.readFileSync(filePath, 'utf8');
    }
  }

  // Plain text / MD / JSON / DOCX fallback
  return fs.readFileSync(filePath, 'utf8');
}

async function processAndUploadDocument(userId, file) {
  const extractedText = await extractTextFromFile(file.path, file.mimetype);
  
  // Create text chunks
  const rawChunks = createChunks(extractedText, 600, 120);
  
  // Generate vector embeddings for chunks
  const chunksWithEmbeddings = await generateEmbeddings(rawChunks);

  const title = file.originalname.replace(/\.[^/.]+$/, "");

  if (isMemoryMode()) {
    const doc = {
      _id: 'doc_' + Date.now(),
      id: 'doc_' + Date.now(),
      userId,
      title,
      filename: file.filename,
      originalname: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      status: 'ready',
      chunksCount: chunksWithEmbeddings.length,
      chunks: chunksWithEmbeddings,
      createdAt: new Date()
    };
    memoryDocuments.push(doc);
    return doc;
  }

  const document = new Document({
    userId,
    title,
    filename: file.filename,
    originalname: file.originalname,
    mimeType: file.mimetype,
    size: file.size,
    status: 'ready',
    chunksCount: chunksWithEmbeddings.length,
    chunks: chunksWithEmbeddings
  });

  await document.save();
  return document;
}

async function getUserDocuments(userId) {
  if (isMemoryMode()) {
    return memoryDocuments.filter(d => String(d.userId) === String(userId));
  }
  return await Document.find({ userId }).select('-chunks.embedding').sort({ createdAt: -1 });
}

async function getFullUserDocuments(userId) {
  if (isMemoryMode()) {
    return memoryDocuments.filter(d => String(d.userId) === String(userId));
  }
  return await Document.find({ userId });
}

async function deleteDocument(userId, documentId) {
  if (isMemoryMode()) {
    const index = memoryDocuments.findIndex(d => (d._id === documentId || d.id === documentId) && String(d.userId) === String(userId));
    if (index === -1) throw new Error('Document not found or unauthorized');
    const [deleted] = memoryDocuments.splice(index, 1);
    
    // Clean file on disk if exists
    const filePath = path.join(__dirname, '../uploads', deleted.filename);
    if (fs.existsSync(filePath)) {
      try { fs.unlinkSync(filePath); } catch(e){}
    }
    return true;
  }

  const document = await Document.findOne({ _id: documentId, userId });
  if (!document) {
    throw new Error('Document not found or unauthorized');
  }

  const filePath = path.join(__dirname, '../uploads', document.filename);
  if (fs.existsSync(filePath)) {
    try { fs.unlinkSync(filePath); } catch(e){}
  }

  await Document.deleteOne({ _id: documentId });
  return true;
}

module.exports = {
  processAndUploadDocument,
  getUserDocuments,
  getFullUserDocuments,
  deleteDocument,
  memoryDocuments
};
