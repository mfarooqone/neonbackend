const express = require("express");
const contactUsRouter = express.Router();

contactUsRouter.get("/api/pages/contact-info", (req, res) => {
  try {
    const responseText = `Contact information
    Trade name: OPAY TRADING LIMITED
    
    Phone number: +1 512-961-8397 (U.S.) / +852 8193 0912 (Hong Kong)
    
    Email: info@customsneon.com
    
    Physical address: 253～261 Hennessy Road, FLAT /RM 1502,EASEY COMMERCIAL BUILDING, Wan Chai, Hong Kong Island Hong Kong SAR
    `;

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

module.exports = contactUsRouter;
