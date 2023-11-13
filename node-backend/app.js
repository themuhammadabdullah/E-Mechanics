const express = require("express");
require('dotenv').config({ path: 'node.env' });
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const User = require("./models/User");
const Review = require("./models/Review");
const app = express();
require("./db/conn");
const jwtToken = require("jsonwebtoken");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from me");
});

app.listen(8000, () => {
  console.log(`Server is running on 8000`);
});

const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

app.post("/signup", async (req, res) => {
  try {
    const { Name, password, email, phoneNumber, userType, address } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { phoneNumber }] });
    if (existingUser) {
     if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already registered" });
      } else if (existingUser.phoneNumber === phoneNumber) {
        return res.status(400).json({ message: "Phone number already registered" });
      }
    }

    const newUser = new User({
      Name,
      password, // Store the plaintext password
      email,
      phoneNumber,
      address,
      userType,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});


app.post("/Review", async (req, res) => {
  try {
    const { name, email, review } = req.body;

    const newReview = new Review({
      name,
      email,
      review,
    });

    await newReview.save();

    res.status(200).json({ message: "Review sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/Review", async (req, res) => {
  try {
    const reviews = await Review.find({}, 'name email review'); // Query all reviews and project 'name', 'email', and 'review' fields
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching reviews" });
  }
});



app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid User" });
    }

    if (user.isDeleted) {
      return res.status(403).json({ message: "User account is deactivated" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});


app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route.", userId: req.userId });
});