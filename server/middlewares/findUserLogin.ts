import { generate } from "randomstring";
import { Usuario } from "../models/users";
import { sendEmail } from "../mailer/mailer";

export const findUserLogin = async (email: string): Promise<void> => {
  const findUser = await Usuario.findOne({ email: email });

  if (!findUser) {
    throw new Error("El usuario no se encuentra en la base de datos.");
  }

  if (findUser.email && findUser.verified === false) {
    const code: string = generate({ length: 6, charset: "numeric" });
    const newCode: number = Number(code);
    await Usuario.findOneAndUpdate({ email: email }, { code: newCode });
    await sendEmail(email, newCode);
    throw new Error(
      "El usuario todavia no ha sido verificado, comprueba tu correo para obtener el código de verificación."
    );
  }
};
