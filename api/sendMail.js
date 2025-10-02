// api/sendMail.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.post("/", async (req, res) => {
  const { email, fullName, subject, message } = req.body;
  console.log(req.body);
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TARGET_EMAIL,
    subject: subject,
    text: `Email: ${email}\n\n
    Full Name: ${fullName}\n\n
    Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
