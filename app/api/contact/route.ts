import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: `${process.env.SMTP_USER}, ${process.env.EMAIL_RECEIPIENT}`,
      subject: subject || `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
      replyTo: email,
    };

    // Send email to Jake and Angelika
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the sender
    const confirmationEmail = {
      from: `Angelika Bianca <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Message Received - Thank You!`,
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you as soon as possible.\n\nYour Message:\nSubject: ${subject || "No subject"}\nMessage: ${message}\n\nBest regards,\nBianca's Portfolio Team`,
    };

    await transporter.sendMail(confirmationEmail);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
