import { Resend } from "resend";

export const sendEmail = async (email, otp) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "AIFA Film Academy <onboarding@resend.dev>", // Use verified domain in production
    to: [email],
    subject: "Reset Your Password - AIFA",
    html: `
      <div style="font-family: sans-serif; max-width: 400px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #333; text-align: center;">Password Reset</h2>
        <p>Your 6-digit verification code is:</p>
        <div style="background: #C7E36B; color: black; font-size: 32px; font-weight: bold; text-align: center; padding: 15px; border-radius: 8px; letter-spacing: 5px;">
          ${otp}
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">This code will expire in 10 minutes. If you didn't request this, please ignore this email.</p>
      </div>
    `,
  });

  if (error) throw new Error(error.message);
  return data;
};