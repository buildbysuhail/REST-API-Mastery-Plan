const express = require("express");
const authRoutes = require("./routes/auth.routes.cjs");
const errorHandler = require("./middlewares/error.mddleware.cjs");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(errorHandler);

module.exports = app;