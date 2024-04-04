const express = require("express");
const config = require("../../config/config");
const stripe = require("stripe")(config.secretkey);

const stripeRouter = express.Router();

stripeRouter.post("/api/payment-intent", async (req, res) => {
   try {

     // Extract amount from request body
     const { amount } = req.body;



     // Check if amount is provided
     if (!amount) {
       return res.status(400).json({
         statusCode: 400,
         error: "Bad Request",
         message: "Amount is required",
       });
     }

      const amountInDollars = amount;
     const amountInCents = Math.round(amountInDollars * 100); 




     // Create Payment Intent with the provided amount
     const paymentIntent = await stripe.paymentIntents.create({
       amount: amountInCents,
       currency: 'usd',
       automatic_payment_methods: {
         enabled: true,
       },
     });
 
     res.status(200).json(paymentIntent);
   } catch (error) {
     console.error("Error creating Payment Intent:", error);
     res.status(500).json({
       statusCode: 500,
       error: "Could not create Payment Intent",
       message: error.message,
     });
   }
 });
 

 module.exports = stripeRouter;
