const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true }, 
  phoneNumber: { type: String },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true 
});

userSchema.index({ name: 'text', email: 'text' });

const User = mongoose.model('User', userSchema);

module.exports = User;
