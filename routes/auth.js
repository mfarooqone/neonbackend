const express = require("express");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");

// SIGN UP
authRouter.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        statusCode: 400,
        error: "Unauthorized",
        message: "User with same email already exists!",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new User({
      email,
      password: hashedPassword,
      name,
    });
    user = await user.save();
    res.json(user);
  } catch (e) {
    return res.status(400).json({
      statusCode: 400,
      error: "Unauthorized",
      message: e.message,
    });
  }
});

// Sign In Route
authRouter.post("/api/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        error: "Unauthorized",
        message: "User with this email does not exist!",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        statusCode: 400,
        error: "Unauthorized",
        message: "Incorrect password.",
      });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      error: "Unauthorized",
      message: e.message,
    });
  }
});
///

///

authRouter.post("/api/cart", (req, res) => {
  try {
    const {
      neon,
      fontstyle,
      align,
      color,
      size,
      backboardcolor,
      backboardstyle,
      location,
      adaptertype,
      remote,
      description,
    } = req.body;

    // Check if any required field is missing or empty
    const requiredFields = [
      "neon",
      "fontstyle",
      "align",
      "color",
      "size",
      "backboardcolor",
      "backboardstyle",
      "location",
      "adaptertype",
      "remote",
      "description",
    ];
    const missingFields = requiredFields.filter(
      (field) => !req.body.hasOwnProperty(field) || !req.body[field]
    );
    if (missingFields.length > 0) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: `Missing or empty required fields: ${missingFields.join(
          ", "
        )}`,
      });
    }

    const nullFields = requiredFields.filter(
      (field) => req.body[field] === null
    );
    if (nullFields.length > 0) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: `Null values found in required fields: ${nullFields.join(
          ", "
        )}`,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: "Order placed successfully",
      orderDetails: req.body,
    });
  } catch (e) {
    return res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: e.message,
    });
  }
});

///
///
///

authRouter.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    res.json(true);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// get user data
authRouter.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});

module.exports = authRouter;
