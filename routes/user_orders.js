const express = require("express");
const User = require("../models/user");
const ordersRouter = express.Router();

// POST endpoint for purchasing an item
ordersRouter.post("/api/user/:userId/purchase/:itemId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    // Retrieve the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not found",
        message: "User not found",
      });
    }

    // Find the index of the item to be purchased in the cart array
    const index = user.cart.findIndex((item) => item.id === itemId);
    if (index === -1) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not found",
        message: "Item not found in the cart",
      });
    }

    // Update payment status of the item from "pending" to "paid"
    user.cart[index].payment_status = "paid";

    // Move the item from cart to orders
    const itemToPurchase = user.cart[index];
    user.orders.push(itemToPurchase);
    user.cart.splice(index, 1);

    // Save the updated user document back to the database
    await user.save();

    // Respond with success message
    res.status(200).json({
      statusCode: 200,
      error: "success",
      message: "Item purchased and moved to orders successfully",
    });
  } catch (error) {
    // Handle any errors
    console.error("Error purchasing item:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = ordersRouter;
