/// npm run dev

const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const cartRoute = require("./routes/cart");
const aboutUsRouter = require("./routes/pages/about_us");
const shippingRouter = require("./routes/pages/shipping_policy");
const { default: mongoose } = require("mongoose");

/// INIT
const PORT = 3030;
const app = express();
const DB =
  "mongodb+srv://farooqone:iphonepakistaN@cluster0.yehdinj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

/// middleware

app.use(express.json());
app.use(cors());
app.use(authRouter);
app.use(cartRoute);
app.use(aboutUsRouter);
app.use(shippingRouter);



///
/// connection

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });
