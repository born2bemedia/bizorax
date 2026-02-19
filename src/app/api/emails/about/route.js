import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const {
      contactPerson,
      contactEmail,
      organisingCompany,
      eventName,
      eventLink,
      industry,
      eventLocation,
      eventDate,
      eventTopic,
      participationType,
      attachFiles = [],
    } = bodyJSON;

    const attachments = attachFiles.map((file) => ({
      filename: file.name,
      content: file.base64,
      type: file.type || "application/octet-stream",
      disposition: "attachment",
    }));

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: "Event Request Submission",
      text: `Contact Person: ${contactPerson}
Contact Email: ${contactEmail}
Organising Company: ${organisingCompany}
Event Name: ${eventName}
Event Link: ${eventLink}
Industry: ${industry}
Event Location: ${eventLocation}
Event Date: ${eventDate}
Event Topic: ${eventTopic}
Type of Participation: ${participationType}
Attach Files: ${attachments.length > 0 ? attachFiles.map((file) => file.name).join(", ") : "No files attached"}`,
      attachments,
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
