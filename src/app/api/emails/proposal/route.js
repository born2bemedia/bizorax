import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const bodyJSON = await request.json();
    const { firstName, lastName, email, phone, website, company, challenges, goals } = bodyJSON;

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: "Get a Proposal Confirmation",
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company website: ${website}
Company name: ${company}
Challenges: ${challenges.length ? challenges.join(", ") : "No challenges provided"}
Goals: ${goals.length ? goals.join(", ") : "No goals provided"}`,
    };

    await sgMail.send(msg);

    return NextResponse.json({ message: "Success: emails were sent" });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE", error: error.message },
      { status: 500 }
    );
  }
}
