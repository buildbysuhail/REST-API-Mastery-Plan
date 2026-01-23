// require("dotenv").config();
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { use } = require("react");
import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());

// In-memory user storage (for demonstration purposes)
// ===================================================
const users = [];

// Auth Middleware
// ===================================================
const protect = (req, res, next) => {
    let token;

    // Check for token in headers
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
     
    if (!token) { // No token found
        return res.status(401).json({ message: "No token, access denied" });
    }

    // Verify token
    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { id, email }
        next(); 
    } catch (err) {
        res.status(401).json({ message: "Token is invalid" });
    }
};

// Sigup Route
// ===================================================
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };
    
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
});

// Login Route
// ===================================================
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) { // User not found
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { // Password does not match
        return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign( // Generate token by signing user info with secret key
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({ 
        message: "Login successful",
        token
     });
});

// Protected Route
// ===================================================
app.get("/profile", protect, (req, res) => {
    const user = users.find(u => u.id === req.user.id);

    res.json({
        id: user.id,
        name: user.name,
        email: user.email
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})