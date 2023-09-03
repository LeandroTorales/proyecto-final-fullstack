import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { InterfaceUsers, Usuario } from "../models/users";

export const validacionToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers["user-token"] as string;

  if (!token) {
    res.status(400).json({
      msj: "No se encontró el token en la petición",
    });
    return;
  }

  try {
    const tokenPayload = verify(token, process.env.KEYFORTOKENS as string);

    if (!tokenPayload) {
      res.status(404).json({
        msj: "Token no válido.",
      });
      return;
    }

    const findUserWithIdOfToken: InterfaceUsers | null = await Usuario.findById(
      tokenPayload as JwtPayload
    );

    if (!findUserWithIdOfToken) {
      res.status(404).json({
        msj: "No se encontró el usuario con el token proporcionado.",
      });
      return;
    }

    req.body.usuarioConfirmado = findUserWithIdOfToken;
    next();
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un problema en el servidor");
  }
};
