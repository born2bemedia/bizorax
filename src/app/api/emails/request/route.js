import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      lastName,
      company,
      email,
      phone,
      budget,
      website,
      message,
    } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Bizorax" <noreply@bizorax.com>',
      to: "noreply@bizorax.com",
      subject: "Consultation Request",
      text: `Name: ${yourName}
      Last Name: ${lastName}
Company: ${company}
Email: ${email}
Phone: ${phone}
Budget: ${budget}
Website: ${website}
Message: ${message}`,
    };

    const mailOptionsClient = {
      from: '"Bizorax" <noreply@bizorax.com>',
      to: email,
      subject: "Your Consultation Request Has Been Received",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
        <!-- ...HTML content... -->
        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}
