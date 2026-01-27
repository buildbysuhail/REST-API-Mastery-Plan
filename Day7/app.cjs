const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.cjs");
const taskRoutes = require("./routes/taskRoutes.cjs");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;