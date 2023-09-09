import { NextFunction, Request, Response } from "express";
import { InterfaceUsers } from "../models/users";

export const isVerified = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userConfirmado: InterfaceUsers = req.body.usuarioConfirmado;

  if (userConfirmado.verified === false) {
    res.status(401).json({
      msj: "El usuario todavía no ha sido verificado.",
    });
    return;
  }
  next();
};
