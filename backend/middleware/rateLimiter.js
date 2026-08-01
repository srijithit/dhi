const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // 30 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many login/registration attempts. Please try again in 15 minutes.'
  }
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120, // 120 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'API rate limit exceeded. Please slow down your requests.'
  }
});

const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 40, // 40 chat prompts per minute
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Chat rate limit reached. Please wait a moment before sending another prompt.'
  }
});

module.exports = {
  authLimiter,
  apiLimiter,
  chatLimiter
};
