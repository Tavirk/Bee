const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/users");
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server running ok"
    });
});

// Signup: Register User
app.post("/api/users/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email, Please login"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 8);
        let newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        await newUser.save();
        res.json({
            success: true,
            message: "User registered successfully, please login to continue"
        });
    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        });
    }
});

// Login: Authenticate User
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        let userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(400).json({
                success: false,
                message: "User does not exist, Please signup"
            });
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password, Please try again"
            });
        }
        let token = jwt.sign({ user: userExist._id }, "okkkk");
        return res.json({
            success: true,
            message: "Login successful",
            token: token
        });
    } catch (error) {
        console.log(error.message);
        res.json({
            message: error.message
        });
    }
});
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Invalid password" });
    // Generate JWT: payload {userid: user._id}
    const token = jwt.sign({ userid: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ success: true, token });
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogapp')
    .then(() => console.log("Connected!"))
    .catch((err) => {
        console.log(err.message);
    });

app.listen(3344, () => {
    console.log("Server is running on port 3344");
});
