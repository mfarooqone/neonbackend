const express = require("express");
const nodemailer = require("nodemailer");
const config = require("../../config/config");

const nodeMailerRouter = express.Router();

const GODADDY_EMAIL = config.email;
const GODADDY_PASSWORD = config.password;

// Body parser middleware

nodeMailerRouter.use(express.urlencoded({ extended: false }));

// Nodemailer transporter setup

const transporter = nodemailer.createTransport({
  service: "Godaddy",
  host: "smtpout.secureserver.net",
  secureConnection: true,
  port: 465,

  auth: {
    user: GODADDY_EMAIL,
    pass: GODADDY_PASSWORD,
  },
});

// Contact form route
nodeMailerRouter.post("/api/pages/contact-us", (req, res) => {
  const { name, email, phone, comment } = req.body;

  // Email message configuration
  const message = {
    from: email,
    to: "info@customsneon.com",
    subject: "Contact Form",
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Comment: ${comment}
    `,
  };

  // Send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        statusCode: 500,
        error: "Failed to send message",
        message: error.message,
      });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({
        statusCode: 200,
        error: "Message sent successfully",
        message: error.message,
      });
    }
  });
});

module.exports = nodeMailerRouter;
