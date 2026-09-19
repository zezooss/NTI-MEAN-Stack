exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@gmail.com" && password === "123456") {
        res.json({ message: "Login successful", token: "my-secret-token" });
    } else {
        res.status(400).json({ message: "Invalid email or password" });
    }
};