const express = require("express");
const refundRouter = express.Router();

shippingRouter.get("/api/policies/refund-policy", (req, res) => {
   try {
      const refundPolicyText = `Refund Policy:
  
  We regret to inform you that we are unable to provide refunds or accept returns for Custom Order Products. It is important to note that if the Goods arrive in a damaged state, you must notify both the delivery agent and us (the Seller) within 24 hours in writing, accompanied by photographic or video evidence of the damage to the Goods and its packaging. Failure to comply with this requirement within the specified timeframe will result in the voiding of our obligations.
  
  Upon delivery, it is your responsibility to inspect the Goods and inform us (the Seller) in writing within forty-eight (48) hours of any alleged defects, shortages in quantity, damages, or discrepancies with the description or quote. We kindly request that you allow us a reasonable amount of time to inspect the Goods following delivery. Failure to adhere to these provisions will result in the Goods being presumed to be in accordance with the terms and conditions, free from any defects or damages.
  
  We have implemented a 30-day return policy, which allows you to request a return within 30 days of receiving your item. However, please note that since most of our neon signs are custom made, we only accept return requests under the following circumstances:
  
  1. The item(s) arrived in a damaged state.
  2. The item(s) are found to be faulty.
  3. The wrong item(s) were shipped.
  
  To be eligible for a return, the item(s) must be in the same condition as when you received them and in their original packaging. Additionally, you will need to provide the receipt or proof of purchase.
  
  To initiate a return, please contact us at info@customsneon.com. Kindly note that all returns must be sent to the following address:
  
  CA02 warehouse
  17560 Rowland Street, City of Industry, 91748 California, USA
  
  If your return is accepted, we will provide you with a return shipping label and detailed instructions on how and where to send your package. Please be aware that we will not accept items sent back to us without prior authorization for return.
  
  When a return is accepted, Custom Neon will cover all shipping costs incurred.
  
  If you have any further questions regarding returns, please do not hesitate to contact us at info@customsneon.com.
  
  Custom Neon is pleased to offer a 24-month warranty that specifically covers electrical components when used.`;
  
      res.status(200).send(refundPolicyText);
    } catch (error) {
    console.error("Error fetching Custom Neon info:", error);
    res.status(500).json({
      statusCode: 500,
      error: "Internal Server Error",
      message: error.message,
    });
  }
});

module.exports = refundRouter;
