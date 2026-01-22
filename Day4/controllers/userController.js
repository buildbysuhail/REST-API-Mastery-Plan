exports.createUser = (req, res) => {
    const { name, email, age } = req.body;

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: { name, email, age },
    })
}

exports.updateUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: "User updated successfully",
    })
}