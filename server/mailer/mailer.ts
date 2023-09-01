import { createTransport } from "nodemailer";

export const sendEmail = async (userEmail: string, code: number): Promise<void> => {
  try {
    const config = {
      service: "gmail",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.USERGMAIL,
        pass: process.env.EMAILPASSWORD,
      },
    };

    const mailOptions = {
      from: process.env.USERGMAIL,
      to: userEmail,
      subject: "Código de seguridad",
      text: `¡Hola!, vimos que te has registrado en nuestro sitio web, acontinuación, tienes que proporcionarnos el siguiente código para poder verificar tu usuario: ${code}`,
    };

    const transporter = createTransport(config);
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new Error("Un error a ocurrido en el servidor.");
  }
};
