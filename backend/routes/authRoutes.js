const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../services/authService');
const { validateRegister, validateLogin } = require('../middleware/validation');
const { authLimiter } = require('../middleware/rateLimiter');
const { sendSuccess, sendError } = require('../utils/responseHandler');

// POST /register
router.post('/register', authLimiter, validateRegister, async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const result = await registerUser({ username, email, password });
    return sendSuccess(res, result, 'Registration successful', 201);
  } catch (err) {
    return sendError(res, err.message, 400);
  }
});

// POST /login
router.post('/login', authLimiter, validateLogin, async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await loginUser({ username, password });
    return sendSuccess(res, result, 'Login successful', 200);
  } catch (err) {
    return sendError(res, err.message, 401);
  }
});

module.exports = router;
