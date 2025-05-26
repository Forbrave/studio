
"use server";

import { z } from "zod";
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(2, "Message must be at least 2 characters long.").max(500, "Message must be less than 500 characters."),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data; // Keep this line

  // Create a transporter object using your email service details
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'SendGrid', etc.
    auth: {
      user: 'adityagajbhiye2503@gmail.com', // Replace with your email address
      pass: 'ffes vbzz iswb ybwp', // Replace with your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: 'adityagajbhiye125@gmail.com', // Replace with your email address
    to: 'adityagajbhiye2503@gmail.com', // Recipient email address
    subject: `New message from contact form - ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully!');

    return {
      status: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      status: 'error',
      message: 'There was an error sending your message. Please try again later.',
    };
  }
}
