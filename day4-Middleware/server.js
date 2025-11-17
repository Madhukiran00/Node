import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import TaskRouter from "./src/api/task/task.router.js";
import logger from "./src/middlewares/logger.js";
import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();

// Built-in middleware
app.use(express.json());
app.use(cors());

// Custom middleware
app.use(logger);

// Routes
app.use("/api/tasks", TaskRouter);

// Centralized error handler
app.use(errorHandler);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
