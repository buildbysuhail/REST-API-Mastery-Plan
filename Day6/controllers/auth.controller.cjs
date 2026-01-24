const bcrypt = require("bcryptjs");
const users = require("../models/user.models.cjs");
const generateToken = require("../utils/token.cjs");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    // validation
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
    // authentication
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
     // token creation
     const token = generateToken({ id: user.id, email: user.email });

     res.json({ token });
}

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //

    // create user
    const user = {
        id: users.length + 1,
        email,
        password: hashedPassword,
    };

    users.push(user);
}

exports.profile = (req, res) => {
    res.json({ user: req.user });
};