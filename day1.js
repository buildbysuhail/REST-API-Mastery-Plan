// Import necessary modules
const { error } = require('console');
const express = require('express');
const { Server } = require('http');

const app = express();

const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/ping', (_, res) => {
    res.status(200).json({
        message: 'pong'
    })
})

// Handle unknown routes
app.use((_, res) => {
    res.status(404).json({
        error: "Route not found"
    });
})

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})