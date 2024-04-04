const express = require("express");
const questionRouter = express.Router();

const questions = [
  {
    question: "Who is Customs Neon?",
    answer: `Established in 2022 by founder Andy, Customs Neon embraces a sincere purpose: to lighting up all wonderful moments in people’s life. As we've grown, our focus remains unwavering. With teams in Hong Kong and the US, our brand comprises dedicated professionals—seasoned product experts, talented designers, media-savvy marketers, and 24/7 customer support - each contributing their unique expertise.

    Our product lineup ranges from neon sign designs in hundreds (and accumulating) unique styles, to neon sign templates that customers can personalize with text, shapes or photos. Furthermore, customers can use our WYSIWYG online design tool to DIY their very own neon signs from scratch, or upload an image for our team to turn it into an artwork.
    
    Our core offerings center around LED neon lights, a canvas we constantly innovate upon. Our commitment to bold creativity drives us to deliver the latest in neon technology and design. Customs Neon isn't about grand claims; it's about authentically enhancing life's moments, one gentle glow at a time.`,
    _id: `1`,
  },
  ///
  {
    question: `How do customers evaluate Customs Neon?`,
    answer: `Since our brand's establishment, our products and services have been well-received by customers, garnering hundreds of positive reviews from various platforms. You can find our reviews through the following channels. We hope these reviews can offer assistance in your product selection process or provide inspiration for your product design.

    Trustpilot.com Rated 4.9
    
    Facebook Rated 5
    
    Judge.me Rated 5
    
    Additionally, we warmly welcome customers and fans to share photos of our products on Instagram using the hashtag #customsneonglow.`,
    _id: `2`,
  },
  
  ///
  {
    question: `How to customize a neon sign?`,
    answer: `On the Neonwill website, you have multiple options to effortlessly turn your creativity into unique neon lights.

 
    DESIGN YOUR TEXT
    Using our online neon sign design tool, you can enter custom letters and choose the desired lighting color, font, size, backboard, etc., while previewing the design of the neon light sign and checking the quotation in real time.`,
    _id: `3`,
  },
  ///
  {
    question: ``,
    answer: ``,
    _id: `4`,
  },
  ///
  {
    question: ``,
    answer: ``,
    _id: `5`,
  },
  ///
  {
    question: ``,
    answer: ``,
    _id: `6`,
  },

  ///
];

questionRouter.get("/api/faq", (req, res) => {
  try {
    if (questions.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        error: "Not Found",
        message: "No questions found",
      });
    }

    let responseText = "Questions and Answers\n\n";
    questions.forEach((question, index) => {
      responseText += `Question ${index + 1}: ${question.question}\n`;
      responseText += `Answer ${index + 1}: ${question.answer}\n\n`;
    });

    res.status(200).send(responseText);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = questionRouter;
