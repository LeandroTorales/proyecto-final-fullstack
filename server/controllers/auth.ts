import { Request, Response } from "express";
import { InterfaceUsers, Usuario } from "../models/users";
import { compare, genSalt, hashSync } from "bcryptjs";
import { ROLES } from "../constants/roles";
import randomstring from "randomstring";
import { sendEmail } from "../mailer/mailer";
import { generarTokenJWT } from "../helpers/generarTokenJWT";

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const informationUser: InterfaceUsers = req.body;

  const findUser = await Usuario.findOne({ email: informationUser.email });
  if (findUser) {
    res.status(400).json({
      msj: "El usuario que se quiere registrar, ya esta registrado en la base de datos",
    });
    return;
  }

  const newUsuario = new Usuario(informationUser);

  const salt = await genSalt(10);
  newUsuario.password = hashSync(informationUser.password, salt);

  const adminRolKey = req.headers["admin-keyrol"];
  if (adminRolKey === process.env.KEYROLADMIN) {
    newUsuario.rol = ROLES.admin;
  }

  const code: string = randomstring.generate({
    length: 6,
    charset: "numeric",
  });
  const newCodeForUser: number = Number(code);
  newUsuario.code = newCodeForUser;

  await newUsuario.save();
  await sendEmail(newUsuario.email, newUsuario.code);

  res.status(201).json({
    msj: "Te has registrado correctamente. Te enviamos instrucciones al mail registrado para verificar la cuenta.",
    newUsuario,
  });
};

export const verifyUserWithEmail = async (req: Request, res: Response): Promise<void> => {
  interface VerifyUser {
    email: string;
    code: number;
  }

  const informationUser: VerifyUser = req.body;

  try {
    const findUser = await Usuario.findOne({ email: informationUser.email });

    if (!findUser) {
      res.status(404).json({
        msj: "El usuario todavía no ha sido registrado.",
      });
      return;
    }

    if (findUser.verified === true) {
      res.status(400).json({
        msj: "El usuario ya ha sido verificado previamente.",
      });
      return;
    }

    if (findUser.code !== informationUser.code) {
      res.status(400).json({
        msj: "El código proporcionado es incorrecto.",
      });
      return;
    }

    await Usuario.findOneAndUpdate(
      { email: informationUser.email },
      { verified: true },
      { new: true }
    );

    res.status(200).json({
      msj: "Se ha verificado correctamente el usuario.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msj: "Ocurrió un error en el servidor",
    });
    return;
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  interface InterfaceLogin {
    email: string;
    password: string;
  }

  const informationUser: InterfaceLogin = req.body;

  try {
    const findUser = await Usuario.findOne({ email: informationUser.email });
    const validacionPassword = await compare(
      informationUser.password,
      findUser?.password as string
    );

    if (!findUser) {
      res.status(404).json({
        msj: "El usuario todavía no esta registrado.",
      });
      return;
    }

    if (!validacionPassword) {
      res.status(400).json({
        msj: "La contraseña es incorrecta.",
      });
      return;
    }

    const token = await generarTokenJWT(findUser.id);

    res.status(200).json({
      msj: "Te haz logueado correctamente.",
      usuario: findUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msj: "Ocurrió un error en el servidor",
    });
    return;
  }
};
