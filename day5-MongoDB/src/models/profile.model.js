const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  bio: { type: String },
  age: { type: Number },
  gender: { type: String, enum: ['male','female','other'] },
  address: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});


module.exports.Profile = mongoose.model('Profile', profileSchema);
