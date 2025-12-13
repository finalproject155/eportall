import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendStudentCredentials({
  email,
  fullName,
  matric,
  password,
}) {
  await transporter.sendMail({
    from: `"LAUTECH Portal" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: "Your LAUTECH Student Portal Login Details",
    html: `
      <h2>Welcome to LAUTECH Student Portal</h2>
      <p>Hello <strong>${fullName}</strong>,</p>

      <p>Your student portal account has been created.</p>

      <p><strong>Login Details:</strong></p>
      <ul>
        <li><strong>Matric Number:</strong> ${matric}</li>
        <li><strong>Password:</strong> ${password}</li>
      </ul>

      <p>Please log in and change your password immediately.</p>

      <br/>
      <p>LAUTECH ICT Unit</p>
    `,
  });
}
