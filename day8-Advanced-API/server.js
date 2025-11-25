const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
const errorHandler = require("./src/middlewares/errorHandler.middleware");

// routes
const userRoutes = require("./src/api/user/user.routes");
app.use(cors());

app.use(requestLogger);



// api routes
app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// global error handler
app.use(errorHandler);

