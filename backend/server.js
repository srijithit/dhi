const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const config = require('./config/env');
const { connectDB } = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Route Imports
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false // Allow inline scripts for dev React testing
}));

app.use(cors({
  origin: config.corsOrigin,
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static uploads serving (protected by auth if needed, or public)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'RAG Chatbot Backend API Engine',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api', authRoutes);
app.use('/api', documentRoutes);
app.use('/api', chatRoutes);

// Global Error Handler
app.use(errorHandler);

// Start Server & Connect DB
const PORT = config.port;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`  🚀 RAG Chatbot Server running on http://localhost:${PORT}`);
    console.log(`  🔒 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`=======================================================`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = app;
