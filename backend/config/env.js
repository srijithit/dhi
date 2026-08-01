const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rag_chatbot',
  jwtSecret: process.env.JWT_SECRET || 'rag_chatbot_super_secret_jwt_key_2026',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  embeddingProvider: process.env.EMBEDDING_PROVIDER || 'local',
  llmApiKey: process.env.LLM_API_KEY || ''
};
