const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/env');
const { isMemoryMode } = require('../config/db');

// Memory store fallback users
const memoryUsers = [];

function generateToken(user) {
  return jwt.sign(
    { id: user._id || user.id, username: user.username, role: user.role },
    config.jwtSecret,
    { expiresIn: '7d' }
  );
}

async function registerUser({ username, email, password }) {
  if (isMemoryMode()) {
    const existing = memoryUsers.find(u => u.username === username || u.email === email);
    if (existing) {
      throw new Error('User with this username or email already exists');
    }
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: 'usr_' + Date.now(),
      username,
      email,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date()
    };
    memoryUsers.push(newUser);
    const token = generateToken(newUser);
    return { user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role }, token };
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error('User with this username or email already exists');
  }

  const user = new User({ username, email, password });
  await user.save();

  const token = generateToken(user);
  return {
    user: { id: user._id, username: user.username, email: user.email, role: user.role },
    token
  };
}

async function loginUser({ username, password }) {
  if (isMemoryMode()) {
    const user = memoryUsers.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) throw new Error('Invalid username or password');
    
    const bcrypt = require('bcryptjs');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid username or password');

    const token = generateToken(user);
    return { user: { id: user.id, username: user.username, email: user.email, role: user.role }, token };
  }

  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid username or password');
  }

  const token = generateToken(user);
  return {
    user: { id: user._id, username: user.username, email: user.email, role: user.role },
    token
  };
}

module.exports = {
  registerUser,
  loginUser,
  memoryUsers
};
