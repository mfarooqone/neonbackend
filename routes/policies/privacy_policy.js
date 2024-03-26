const express = require("express");
const privacyRouter = express.Router();

privacyRouter.get("/api/policies/privacy-policy", (req, res) => {
  try {
    const responseText = `Privacy Policy

This Privacy Policy outlines the procedures and practices of Customs Neon (referred to as the "Site" or "we") regarding the collection, usage, and disclosure of your Personal Information when you visit or make a purchase from our Site.

Contact Information
If you have any additional questions, require further information about our privacy practices, or wish to file a complaint, please reach out to us via email at info@customsneon.com or by mail using the provided details below:

253～261 Hennessy Road, FLAT /RM 1502,EASEY COMMERCIAL BUILDING, Wan Chai, Hong Kong Island Hong Kong SAR

Collection of Personal Information
During your visit to the Site, we gather specific details about your device, your interactions with the Site, and the necessary information required to process your purchases. Additionally, if you contact us for customer support, we may collect additional information. In this Privacy Policy, we refer to any information pertaining to an identifiable individual (including the information listed below) as "Personal Information". Please refer to the following list for more details on the Personal Information we collect and the reasons behind it.

Device Information
Purpose of Collection: To ensure accurate loading of the Site and to conduct analytics on Site usage for optimization purposes.
Source of Collection: Automatically collected when you access our Site through the use of cookies, log files, web beacons, tags, or pixels.
Disclosure for Business Purposes: Shared with our processor.
Personal Information Collected: Version of web browser, IP address, time zone, cookie information, viewed sites or products, search terms, and your interactions with the Site.

Order Information
Purpose of Collection: Our purpose for collecting your information is to fulfil our contract with you by providing products or services. We also use this information to process your payment, arrange for shipping, send you invoices and order confirmations, communicate with you, and screen orders for potential risk or fraud. Additionally, if you have given us your consent, we may use your information to provide you with information or advertising related to our products or services.
Source of Collection: The information is collected directly from you.
Disclosure for Business Purpose: We share your information with our processor, to fulfil our business obligations.
Personal Information Collected: The personal information we collect includes your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.

Minors

Our website is not intended for individuals under the age of 18, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the provided address to request deletion.

Sharing Personal Information

We may share your personal information with service providers who assist us in providing our services and fulfilling our contracts with you, as explained above. 

1. We utilize your personal data to deliver our services to you, such as providing products for purchase, processing payments, shipping and fulfilling your orders, and keeping you informed about new products, services, and promotions.

Legal basis
In accordance with the General Data Protection Regulation (“GDPR”), if you reside in the European Economic Area (“EEA”), we process your personal data based on the following legal grounds:

Your consent;
Execution of the contract between you and the Site;
Compliance with our legal obligations;
Safeguarding your vital interests;
Execution of a task carried out in the public interest;
Pursuit of our legitimate interests, which do not outweigh your fundamental rights and freedoms.

Data retention
Upon placing an order through the Site, we will retain your personal information for our records unless you request its deletion. For more details on your right to erasure, please refer to the ‘Your rights’ section below.

Automated decision-making is a process that involves making decisions based solely on algorithms and data analysis. As a resident of the EEA, you have the right to object to this type of decision-making if it has a legal effect on you or significantly affects you.

At our company, we engage in fully automated decision-making that has a legal or significant effect on our customers using their data. However, our processor, Shopify, uses limited automated decision-making to prevent fraud, which does not have a legal or significant effect on you.

Some of the services that involve automated decision-making include temporarily blacklisting IP addresses and credit cards associated with fraudulent activities. These blacklists are only temporary and last for a short period of time.

Under the GDPR, if you are a resident of the EEA, you have certain rights regarding your personal information. You have the right to access, port, correct, update, or erase your personal information. If you wish to exercise these rights, please contact us using the provided contact information.

Please note that your personal information may be initially processed in Ireland and then transferred outside of Europe for storage and further processing, including to Canada and the United States. For more information on how data transfers comply with the GDPR, you can refer to Shopify's GDPR Whitepaper.

If you are a resident of California, you have similar rights under the CCPA. You have the right to access, port, correct, update, or erase your personal information. If you would like to exercise these rights, please contact us using the provided contact information.

If you would like to designate an authorized agent to submit these requests on your behalf, please reach out to us at the provided address.

Cookies

Cookies are small pieces of data that are stored on your computer or device when you visit our website. We utilize various types of cookies, such as functional, performance, advertising, and social media or content cookies. These cookies enhance your browsing experience by enabling the website to remember your preferences and actions (like login details and region selection). This eliminates the need for you to input the same information repeatedly. Additionally, cookies help us gather insights on how users interact with our website, indicating whether they are new or returning visitors.

To enhance your experience on our website and deliver our services effectively, we employ the following cookies.

Please be aware that due to the lack of a consistent industry understanding on how to respond to "Do Not Track" signals, we do not make any changes to our data collection and usage practices when we detect such a signal from your browser.

Updates
In order to ensure that our practices align with any changes in our operations, legal requirements, or regulations, we may periodically update this Privacy Policy.

Submitting Complaints
If you wish to file a complaint, please reach out to us via email or mail using the contact details provided under the "Contact" section above.

If you are dissatisfied with our response to your complaint, you have the option to lodge your complaint with the relevant data protection authority.`;

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

module.exports = privacyRouter;
