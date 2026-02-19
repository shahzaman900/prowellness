"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

const demoSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone number is required"),
  clinicName: z.string().optional(),
  email: z.string().email("Invalid email address"),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, message } = validatedFields.data;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "info@prowellcare.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again.",
    };
  }
}

export async function submitDemoRequest(prevState: any, formData: FormData) {
  const validatedFields = demoSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    clinicName: formData.get("clinicName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, phone, clinicName, email } =
    validatedFields.data;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "info@prowellcare.com",
      subject: `New Demo Request from ${firstName} ${lastName}`,
      html: `
        <h1>New Demo Request</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Clinic Name:</strong> ${clinicName || "N/A"}</p>
      `,
    });

    return { success: true, message: "Request received successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send request. Please try again.",
    };
  }
}
