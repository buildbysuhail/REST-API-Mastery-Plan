const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

// Global Middlewares
app.use(express.json()); // parse JSON body

// Routes
app.use("/api", userRoutes);

// Not Found Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    })
})

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})