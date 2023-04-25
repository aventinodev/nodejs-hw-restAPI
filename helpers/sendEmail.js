const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, EMAIL_FROM } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: EMAIL_FROM };
    await sgMail.send(email);
    console.log("sendEmail");
    return true;
  } catch (error) {
    console.error("sendgrid--->", error);
  }
};

module.exports = sendEmail;
