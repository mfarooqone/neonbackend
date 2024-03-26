const express = require("express");
const shippingRouter = express.Router();

shippingRouter.get("/api/policies/shipping-policy", (req, res) => {
  try {
    const responseText = `We provide free worldwide shipping for all orders. Our partnership with leading carriers such as DHL Express, FedEx, and UPS ensures a seamless shipping and delivery experience. However, please note that we are unable to deliver to P.O. Boxes.
  
  To ensure the highest quality, our handcrafted neon signs require up to 3 business days for production and inspection before they are shipped. Once dispatched from our warehouse, it typically takes between 5 and 7 business days for your order to arrive at your doorstep.
  
  Once your order is fulfilled, you will receive a shipping notification via email and/or SMS, which will include the tracking number. You can easily track your order using our universal tracking tool, regardless of the carrier being used.
  
  Please be aware that any customs and import taxes that may apply are the responsibility of the customer.
  
  While we strive to fulfill orders promptly, there are certain factors that may cause delays in the shipping and delivery process. These include customs clearance, transport conditions set by the carrier, weather conditions, and global/regional public safety issues.`;

    res.status(200).send(responseText);
  } catch (error) {
    console.error("Error fetching Custom Neon info:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = shippingRouter;
