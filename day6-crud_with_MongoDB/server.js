const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./src/config/db");
const errorHandler = require("./src/middlewares/error.handler");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./src/api/user/user.router"));
app.use("/api/profiles", require("./src/api/profile/profile.router"));

// error handler
app.use(errorHandler);


const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
