const express = require("express");
const User = require("../models/user");
const cartRouter = express.Router();

cartRouter.post("/api/user/:userId/cart", async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartData = req.body.cart; // Extract cart data from the request body

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: "User not found",
      });
    }

    // Ensure cartData is an array
    if (!Array.isArray(cartData)) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: "Cart data must be an array",
      });
    }

    // Add each cart item to the user's cart array
    user.cart.push(...cartData);

    // Save the updated user document back to the database
    await user.save();

    // Respond with success message

    return res.status(200).json({
      statusCode: 200,
      error: "success",
      message: "Cart data added to the user successfully",
    });
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
