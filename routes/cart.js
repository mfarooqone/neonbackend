const express = require("express");
const User = require("../models/user");
const { v4: uuidv4 } = require('uuid'); // Import UUID library
const cartRouter = express.Router();

cartRouter.post("/api/user/:userId/cart", async (req, res) => {
  try {
    const userId = req.params.userId;
    let cartData = req.body.cart; // Extract cart data from the request body

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure cartData is an array of objects
    if (!Array.isArray(cartData) || !cartData.every(item => typeof item === 'object')) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: "Cart data must be an array of objects",
      });
    }

    // Generate a unique ID for each cart item
    cartData = cartData.map(item => ({
      id: uuidv4(), // Generate a unique UUID for each item
      ...item // Keep other properties of the item
    }));

    // Add each cart item to the user's cart array
    user.cart.push(...cartData);

    // Save the updated user document back to the database
    await user.save();

    // Respond with success message
    res.status(200).json({ message: "Cart data added to the user successfully" });
  } catch (error) {
    // Handle any errors
    console.error("Error adding cart data to user:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = cartRouter;
