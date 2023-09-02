import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";

export const recolectErrorsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors: Result<ValidationError> = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).json({
      msj: "Hay errores en la petición.",
      errors,
    });
  }
};
