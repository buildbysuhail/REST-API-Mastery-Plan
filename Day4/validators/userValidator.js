const { body } = require('express-validator');

exports.createUserValidator = [
    body("name")
        .trim() // this removes whitespace from both ends
        .notEmpty().withMessage("Name is required") // checks if the field is not empty
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),

    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Invalid email format")
        .normalizeEmail(),

    body("age")
        .optional()
        .isInt({ min: 1 }).withMessage("Age must be a positive integer")
];

exports.updateUserValidator = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),

    body("email")
        .optional()
        .isEmail().withMessage("Invalid email format")
        .normalizeEmail(),
]