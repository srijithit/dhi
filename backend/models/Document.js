const mongoose = require('mongoose');

const chunkSchema = new mongoose.Schema({
  chunkIndex: Number,
  text: String,
  embedding: [Number]
});

const documentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  originalname: String,
  mimeType: String,
  size: Number,
  status: {
    type: String,
    enum: ['processing', 'ready', 'failed'],
    default: 'processing'
  },
  chunksCount: {
    type: Number,
    default: 0
  },
  chunks: [chunkSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Document', documentSchema);
