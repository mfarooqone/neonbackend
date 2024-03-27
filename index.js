/// npm run dev

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/auth");
const cartRoute = require("./routes/cart");
const aboutUsRouter = require("./routes/pages/about_us");
const contactUsRouter = require("./routes/pages/contact_info");
const refundRouter = require("./routes/policies/refund_policy");
const privacyRouter = require("./routes/policies/privacy_policy");
const shippingRouter = require("./routes/policies/shipping_policy");
const tremsRouter = require("./routes/policies/terms_of_service");


/// INIT
const PORT = 3030;
const app = express();
const DB =
  "mongodb+srv://farooqone:iphonepakistaN@cluster0.yehdinj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

/// middleware

app.use(express.json());
app.use(cors());

//
app.use(authRouter);
app.use(cartRoute);

// pages

app.use(aboutUsRouter);
app.use(contactUsRouter);

// policies


app.use(shippingRouter);
app.use(refundRouter);
app.use(privacyRouter);
app.use(tremsRouter);



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
