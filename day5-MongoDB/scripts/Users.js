
require('dotenv').config();
const connectDB = require('../src/config/db');
const User = require('../src/models/user.model');

const sampleUsers = [
  { name: 'Madhu', email: 'madhu@example.com', password: 'madhu123', phoneNumber: '1111111111' },
  { name: 'kiran', email: 'kiran@example.com', password: 'kiran123', phoneNumber: '2222222222' },
  { name: 'Madhukiran', email: 'madhukiran@example.com', password: 'madhukiran123', phoneNumber: '3333333333' }
];

async function run() {
  try {
    await connectDB(process.env.MONGO_URI);
    const inserted = await User.insertMany(sampleUsers, { ordered: false });
    console.log('Inserted users:', inserted);
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err.message || err);
    process.exit(1);
  }
}

run();
