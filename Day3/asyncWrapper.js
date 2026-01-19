// Since express can't catch async errors automatically, we create this wrapper
// by using higher-order functions.

const asyncWrapper = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}

module.exports = asyncWrapper;
