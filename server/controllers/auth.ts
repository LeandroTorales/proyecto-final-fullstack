import { Request, Response } from "express";
import { InterfaceUsers, Usuario } from "../models/users";
import { genSalt, hashSync } from "bcryptjs";
import { ROLES } from "../constants/roles";
import randomstring from "randomstring";

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const informationUser: InterfaceUsers = req.body;
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
  //MANDAR EL EMAIL CON EL CODE

  res.status(201).json({
    msj: "Te has registrado correctamente. Te enviamos instrucciones al mail registrado para verificar la cuenta.",
    newUsuario,
  });
};

export const verifyUserWithEmail = async (req: Request, res: Response): Promise<void> => {};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);

  res.status(200).json({
    msj: "Todo okey",
  });
};
