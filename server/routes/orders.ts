import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orders";
import { validacionToken } from "../helpers/validacionToken";
import { recolectErrorsMiddlewares } from "../middlewares/recolectErrorsMiddlewares";
import { check } from "express-validator";
import { isVerified } from "../middlewares/isVerified";

export const ordersRouter = Router();

ordersRouter.get("/", [validacionToken, recolectErrorsMiddlewares], getOrders);

ordersRouter.post(
  "/",
  [
    validacionToken,
    isVerified,
    check("products", "El array de productos es obligatorio.").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios.").not().isEmpty(),
    check("shippingCost", "El costo de envío es obligatorio.").not().isEmpty(),
    recolectErrorsMiddlewares,
  ],
  createOrder
);
