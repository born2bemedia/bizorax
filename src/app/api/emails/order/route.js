import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { firstName, email, phone, service, company, website, activity, agreeToPolicy } = bodyJSON;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptionsRecipient = {
      from: '"Nexoria" <noreply@nexoria.ai>',
      to: "noreply@nexoria.ai",
      subject: "Order Form Submission",
      text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nCompany name: ${company}\nCompany website: ${website}\nActivity: ${activity}\nAgree to Policy: ${agreeToPolicy}`,
    };

    const mailOptionsClient = {
      from: '"Nexoria" <noreply@nexoria.ai>',
      to: email,
      subject: "Your Service Request Has Been Received",
      html: `
         <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
            <thead>
                <tr>
                    <th style="background-image: url('https://nexoria.ai/images/letter-top.jpg'); background-size: cover;background-position: center center; background-repeat: no-repeat; height: 117px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${firstName},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for reaching out to Nexoria! We have received your request for the <span style="color: #008967; font-weight: 600;">${service}</span> and appreciate your interest in our services.</p>
                        <p style="font-size: 16px; line-height: 19px;">Our manager will review your inquiry and contact you shortly to discuss your needs. We aim to respond quickly to ensure you receive the required assistance.</p>
                        <p style="font-size: 16px; line-height: 19px;">If you have any questions or need further assistance, please contact us at <a href="mailto:info@nexoria.ai" style="color: #008967; font-weight: 600;text-decoration: underline;">info@nexoria.ai</a>.</p>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for choosing Nexoria. We look forward to assisting you!</p>
                        <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>
                            The Nexoria Team
                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background-color: #222222; font-weight: 600; font-family: Roboto, sans-serif;padding: 24px 0;">
                        <p style="font-size: 20px; line-height: 24px; color: #ffffff; text-align: center;margin: 0;">Thanks for using <a href="https://nexoria.ai/" style="color: #008967; text-decoration: none;">Nexoria</a></p>
                    </td>
                </tr>
            </tfoot>
        </table>
      `,
    };

    await transporter.sendMail(mailOptionsRecipient);
    await transporter.sendMail(mailOptionsClient);

    console.log("Emails sent successfully.");
    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE", error: error.message });
  }
}