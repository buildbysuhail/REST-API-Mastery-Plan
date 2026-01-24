const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.cjs");

const protect = (req, res, next) => {
    // verify token
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
    next();
}

module.exports = protect;