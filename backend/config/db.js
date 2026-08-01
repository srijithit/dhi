const mongoose = require('mongoose');
const config = require('./env');

let isConnected = false;
let memoryStoreMode = false;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 3000
    });
    isConnected = true;
    memoryStoreMode = false;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[Database Warning] Could not connect to MongoDB at ${config.mongoUri}: ${error.message}`);
    console.warn(`[Database Fallback] Operating in Memory-Store Fallback Mode for local development testing.`);
    isConnected = false;
    memoryStoreMode = true;
  }
};

const isDbConnected = () => isConnected;
const isMemoryMode = () => memoryStoreMode;

module.exports = {
  connectDB,
  isDbConnected,
  isMemoryMode
};
