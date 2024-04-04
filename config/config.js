require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3030,
  dbUrl: process.env.DB_URL,
  email: process.env.GODADDY_EMAIL,
  password: process.env.GODADDY_PASSWORD,
  apiKey: process.env.API_KEY,
  secretkey: process.env.STRIPE_SECRET_KEY,
};
