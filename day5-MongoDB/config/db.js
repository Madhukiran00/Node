const mongoose = require('mongoose');

async function connectDB(mongoUri) {
  if (!mongoUri) throw new Error('MONGO_URI is not defined');

  try {
  
    await mongoose.connect(mongoUri);

    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message || err);
    console.error(err);
    throw err;
  }

  return mongoose.connection;
}

module.exports = { connectDB };
