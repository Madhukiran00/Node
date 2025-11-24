const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

// routes
const authRoutes = require("./src/api/auth/auth.router");
const userController = require("./src/api/user/user.controller");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// user routes
app.get("/api/users", async (req, res) => userController.getAllUsers(req, res));
app.get("/api/users/:id", async (req, res) => userController.getUser(req, res));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 3000}`)
    );
  })
  .catch((err) => console.log("Error:-", err));