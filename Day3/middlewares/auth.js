const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

    // later we can add token verification logic here
    next();
}

module.exports = protect;