const express = require("express");
const tremsRouter = express.Router();

tremsRouter.get("/api/policies/terms-of-service", (req, res) => {
  try {
    const responseText = `
    TERMS OF SERVICE

Welcome to Customs Neon! These Terms of Service govern your use of our website and Services. By accessing or using our site, you agree to comply with these terms. Please read them carefully.

Acceptance of Terms: By using our site, you agree to be bound by these Terms of Service.

Age Requirement: You must be of legal age in your jurisdiction to use our Services. If you are under the legal age, you must have parental consent.

Prohibited Activities: You agree not to use our Services for any illegal or unauthorized purposes, and you must not violate any laws in your jurisdiction.

Content Transmission: While using our Services, you understand that your content may be transmitted over networks and may be subject to changes for technical reasons. Credit card information is always encrypted for security.

Intellectual Property: You agree not to reproduce, duplicate, sell, or exploit any part of our Services without our express written permission.

Accuracy of Information: We strive to provide accurate and up-to-date information on our site, but we cannot guarantee its completeness or timeliness. Use information at your own risk.

Service Modifications: Prices and availability of products are subject to change without notice. We reserve the right to modify or discontinue any part of the Service at any time.

Product Availability: Some products may be available exclusively online and may have limited quantities. We reserve the right to limit sales of our products to any person, geographic region, or jurisdiction.

Personal Information: Your submission of personal information through the site is governed by our Privacy Policy.

Third-Party Tools and Links: We may provide access to third-party tools and links. Your use of these tools and links is at your own risk, and we are not liable for any damages or consequences arising from their use.

User Comments and Submissions: We may use and publish user submissions at our discretion. You agree that your submissions will not violate any third-party rights.

Errors and Omissions: We do not guarantee the accuracy or completeness of information on our site and reserve the right to correct errors or omissions.

Prohibited Uses: You agree not to use our site for any unlawful, harassing, or malicious purposes.

Disclaimer of Warranties: We do not guarantee uninterrupted or error-free service. Your use of the Service is at your own risk.

Limitation of Liability: We are not liable for any damages arising from the use of our Service.

Indemnification: You agree to indemnify and hold us harmless from any claims arising from your use of our Service.

Severability: If any provision of these Terms is found to be unlawful or unenforceable, the remaining provisions will still apply.

Termination: We reserve the right to terminate your access to the Service at any time for any reason.

Governing Law: These Terms of Service are governed by the laws of Hong Kong.

Changes to Terms: We reserve the right to update or change these Terms of Service at any time. Your continued use of the Service constitutes acceptance of any changes.

If you have any questions about these Terms of Service, please contact us at info@customsneon.com.

Customs Neon
info@customsneon.com
253～261 Hennessy Road, FLAT /RM 1502,EASEY COMMERCIAL BUILDING, Wan Chai, Hong Kong Island Hong Kong SAR
+1 512-961-8397 (U.S.) / +852 8193 0912 (Hong Kong)
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

module.exports = tremsRouter;
