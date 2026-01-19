// 1. Logger Middleware
// This middleware logs the HTTP method and URL of each incoming request.
const logger = (req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next(); // Very important to call next() to pass control to the next middleware
}

module.exports = logger;