const Log = require('../models/Log');
const { isMemoryMode } = require('../config/db');

async function logEvent({ level = 'info', action, userId = null, ipAddress = '', details = {} }) {
  console.log(`[${level.toUpperCase()}] [${action}]`, details);
  
  if (isMemoryMode()) return;

  try {
    const log = new Log({
      level,
      action,
      userId,
      ipAddress,
      details
    });
    await log.save();
  } catch (err) {
    console.error('[Logger Exception]', err.message);
  }
}

module.exports = {
  logEvent
};
