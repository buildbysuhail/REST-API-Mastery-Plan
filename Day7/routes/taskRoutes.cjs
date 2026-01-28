const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController.cjs");
// const { route } = require("./authRoutes.cjs");
const protect = require("../middleware/authMiddleware.cjs")

const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;