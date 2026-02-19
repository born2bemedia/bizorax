import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const getFileTypeFromBase64 = (base64) => {
  const mimeType = base64.split(";")[0].split(":")[1];
  return mimeType.split("/")[1];
};

export async function POST(request) {
  try {
    const { yourName, yourDomain, email, phone, attachFiles, explanation } =
      await request.json();

    if (!yourName || !yourDomain || !email || !phone) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    const attachments = attachFiles
      ? attachFiles.map((fileBase64, index) => {
          const base64Data = fileBase64.split(",")[1];
          const fileType = getFileTypeFromBase64(fileBase64);
          const mimeType = fileBase64.split(";")[0].split(":")[1];

          return {
            content: base64Data,
            filename: `file-${index}.${fileType}`,
            type: mimeType,
            disposition: "attachment",
          };
        })
      : [];

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: "Form to join the team - page People",
      text: `Name: ${yourName}
Domain: ${yourDomain}
Email: ${email}
Phone: ${phone}
Explanation: ${explanation}`,
      attachments,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Data received and emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
