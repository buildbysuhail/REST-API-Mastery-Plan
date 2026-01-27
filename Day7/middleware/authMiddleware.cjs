const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;

    if (
        req.headers.autherization &&
        req.headers.autherization.startsWith("Bearer")
    ) {
        try { 
            token = req.headers.autherization.spit(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = { id: decoded.userId };
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    } else {
        return res.status(401).json({ message: "No token provided" })
    }
}