const User = require('../models/user.model');

// Create a user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber, isActive } = req.body;
    const user = await User.create({ name, email, password, phoneNumber, isActive });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
  
    if (err.code === 11000) {
      err.status = 400;
      err.message = 'Email already exists';
    }
    next(err);
  }
};

// Get users with pagination & search
exports.getUsers = async (req, res, next) => {
  try {
    // pagination params
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const limit = Math.max(1, parseInt(req.query.limit || '10', 10));
    const skip = (page - 1) * limit;

    // Search query
    const q = req.query.q;
    let filter = {};
    if (q) {
      
      filter = { $text: { $search: q } };
    }

    const [total, users] = await Promise.all([
      User.countDocuments(q ? filter : {}),
      User.find(q ? filter : {})
          .skip(skip)
          .limit(limit)
          .sort({ createdAt: -1 })
          .select('-password') 
    ]);

    const totalPages = Math.ceil(total / limit);

    res.json({
      success: true,
      meta: { total, page, limit, totalPages },
      data: users
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true }).select('-password');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};
