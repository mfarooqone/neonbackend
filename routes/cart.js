const express = require("express");
const User = require("../models/user");
const { v4: uuidv4 } = require("uuid"); // Import UUID library
const cartRouter = express.Router();

/* -------------------------------------------------------------------------- */
/*                                 add to cart                                */
/* -------------------------------------------------------------------------- */

cartRouter.post("/api/user/:userId/cart", async (req, res) => {
  try {
    const userId = req.params.userId;
    let cartData = req.body.cart; // Extract cart data from the request body

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not found",
        message: "User not found",
      });
    }

    // Ensure cartData is an array of objects
    if (
      !Array.isArray(cartData) ||
      !cartData.every((item) => typeof item === "object")
    ) {
      return res.status(400).json({
        statusCode: 400,
        error: "Bad Request",
        message: "Cart data must be an array of objects",
      });
    }

    // Generate a unique ID for each cart item
    cartData = cartData.map((item) => ({
      id: uuidv4(), // Generate a unique UUID for each item
      ...item, // Keep other properties of the item
    }));

    // Add each cart item to the user's cart array
    user.cart.push(...cartData);

    // Save the updated user document back to the database
    await user.save();

    // Respond with success message

    res.status(200).json({
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

/* -------------------------------------------------------------------------- */
/*                                delete item from cart                       */
/* -------------------------------------------------------------------------- */

cartRouter.delete("/api/user/:userId/cart/:itemId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        statusCode: 400,
        error: "Not found",
        message: "User not found",
      });
    }

    // Find the index of the item to be deleted in the cart array
    const index = user.cart.findIndex((item) => item.id === itemId);
    if (index === -1) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not found",
        message: "Item not found in the cart",
      });
    }

    // Remove the item from the cart array
    user.cart.splice(index, 1);

    // Save the updated user document back to the database
    await user.save();

    // Respond with success message

    res.status(200).json({
      statusCode: 200,
      error: "success",
      message: "Item removed from the cart successfully",
    });
  } catch (error) {
    // Handle any errors
    console.error("Error removing item from cart:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

///

/* -------------------------------------------------------------------------- */
/*                                get user cart                               */
/* -------------------------------------------------------------------------- */
cartRouter.get("/api/user/:userId/cart", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not found",
        message: "User not found",
      });
    }

    // Return the user's cart data directly as a list
    
    res.status(200).json(user.cart);
  } catch (error) {
    // Handle any errors
    console.error("Error fetching user cart data:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = cartRouter;
