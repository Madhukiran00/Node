require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const errorHandler = require('./src/middlewares/error.handler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// REGISTER ROUTES  ⬇⬇⬇⬇⬇⬇⬇⬇
const userRoutes = require('./src/api/users.route');
app.use('/api/users', userRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
