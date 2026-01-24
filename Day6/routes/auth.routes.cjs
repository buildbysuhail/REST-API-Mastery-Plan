const express = require("express");
const { 
    signup,
    login,
    profile, 
} = require("../controllers/auth.controller.cjs");

const protect = require("../middlewares/auth.middleware.cjs");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login)
router.get("/profile", protect, profile);

module.exports = router;