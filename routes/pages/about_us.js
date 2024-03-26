const express = require("express");
const aboutUsRouter = express.Router();

aboutUsRouter.get("/api/pages/aboutus", (req, res) => {
  try {
    const responseText = `Our Narrative
At the end of a busy day spent fine-tuning neon lights, a team of skilled craftsmen gathered in their workshop. As they gazed at the illuminated outlines being tested and prepared for shipment, a sense of pride washed over them. These exquisite neon signs, both large and small, in various shades of white and color, in letters and shapes, were soon to be dispatched to doorsteps across the globe.

"What impact will these neon signs have? How will they transform people's lives?" inquired Andy, the team leader. This seemingly simple question sparked a million ideas and laid the groundwork for CustomsNeon, a new brand committed to illuminating all the special moments in people's lives.

Founded in 2022, CustomsNeon comprises a team of neon sign enthusiasts. They are experts in product development, marketing professionals with a deep understanding of media, and customer service representatives available round the clock. Their shared belief is that:

- Neon has the power to transform your words into lasting memories.
- Neon can create the perfect ambiance for any event.
- Neon can convey bold messages for your business.
- Neon can inspire creativity to express love and care.

Our product range includes a wide array of in-house neon sign designs in hundreds of unique styles, with more being added regularly. Customers can also personalize neon sign templates with text, shapes, or photos. Additionally, our WYSIWYG online design tool allows customers to create their own custom neon signs from scratch or submit an image for our team to transform into a work of art.

Each piece is crafted with care and goodwill, bearing the signature of CustomsNeon.`;

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

module.exports = aboutUsRouter;
