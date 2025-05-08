const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const HttpError = require("../models/http-errors");

const tokenBlacklist = new Set();

const logout = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }

    tokenBlacklist.add(token); // Add the token to the blacklist
    res.json({ message: "Logged out successfully." });
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Access denied. No token provided." });
    }
    const token = authHeader.split(" ")[1];

    if (tokenBlacklist.has(token)) {
        return res.status(401).json({ message: "Token is invalid or expired." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token." });
    }
};

const login = async (req, res, next) => {
    const { username, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ username: username });
    } catch (err) {
        const error = new HttpError(
            "Login failed, please try again later.",
            500
        );
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            403
        );
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError(
            "Could not log you in, please check your credentials and try again.",
            500
        );
        return next(error)
    }

    if (!isValidPassword) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            403
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, username: existingUser.username },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );
        return res.json({
            token,
            message: "Logged in successfully",
        });
    } catch (err) {
        const error = new HttpError(
            "Login failed, please try again later.",
            500
        );
        return next(error);
    }
};

const signup = async (req, res, next) => {
    const { username, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ username: username });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            "User exists already, please login instead.",
            422
        );
        return next(error);
    }

    let hashedPassword = await bcrypt.hash(String(password), 10);

    const createdUser = new User({
        username,
        password: hashedPassword,
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: createdUser.id, username: createdUser.username },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
        );
        return res.json({ token, message: "Signed up successfully" });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }
};

exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.authenticateToken = authenticateToken;