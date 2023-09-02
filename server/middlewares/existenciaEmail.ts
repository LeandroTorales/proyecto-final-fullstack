import { InterfaceUsers, Usuario } from "../models/users";
import { sendEmail } from "../mailer/mailer";
import { generate } from "randomstring";

export const existenciaEmail = async (email: string): Promise<void> => {
  const findUser: InterfaceUsers | null = await Usuario.findOne({ email: email });

  if (findUser?.email && findUser.verified === false) {
    const code: string = generate({ length: 6, charset: "numeric" });
    const newCode: number = Number(code);
    await Usuario.findOneAndUpdate({ email: email }, { code: newCode });
    await sendEmail(email, newCode);
    throw new Error(
      "El email ya esta registrado pero no verificado, te enviamos un nuevo correo electrónico con el nuevo código."
    );
  }

  if (findUser?.email && findUser.verified) {
    throw new Error("El email ya ha sido verificado previamente.");
  }
};
