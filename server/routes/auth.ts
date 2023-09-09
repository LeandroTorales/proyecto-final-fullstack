import { Router } from "express";
import { loginUser, registerUser, verifyUserWithEmail } from "../controllers/auth";
import { check } from "express-validator";
import { existenciaEmail } from "../middlewares/existenciaEmail";
import { recolectErrorsMiddlewares } from "../middlewares/recolectErrorsMiddlewares";
import { findUserLogin } from "../middlewares/findUserLogin";

export const authRouter = Router();

authRouter.post(
  "/register",
  [
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email").custom(existenciaEmail),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El email es obligatorio").not().isEmpty(),
    check("password", "El email es obligatorio").isLength({ max: 20, min: 8 }),
    recolectErrorsMiddlewares,
  ],
  registerUser
);

authRouter.patch(
  "/verify",
  [
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("code", "El codigo de verificación es obligatorio.").not().isEmpty(),
    check("code", "El código proporcionado no contiene los caracteres necesarios.").isLength({
      max: 6,
    }),
    recolectErrorsMiddlewares,
  ],
  verifyUserWithEmail
);

authRouter.post(
  "/login",
  [
    check("email", "El email es obligatorio.").not().isEmpty(),
    check("email").custom(findUserLogin),
    check("password", "La contraseña es obligatoria.").not().isEmpty(),
    check("password", "La contraseña debe tener al menos 8 caracteres.").isLength({
      max: 20,
      min: 8,
    }),
    recolectErrorsMiddlewares,
  ],
  loginUser
);
