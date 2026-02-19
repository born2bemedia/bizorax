import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const bodyJSON = await request.json();
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

    const msgRecipient = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.FROM_EMAIL,
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

    const msgClient = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "Your Consultation Request Has Been Received",
      html: `
        <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif; border-right: 1px solid #222222; border-left: 1px solid #222222;">
        <!-- ...HTML content... -->
        </table>
      `,
    };

    await sgMail.send(msgRecipient);
    await sgMail.send(msgClient);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}
