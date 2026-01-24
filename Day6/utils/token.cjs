const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env.cjs");

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};


module.exports = generateToken;