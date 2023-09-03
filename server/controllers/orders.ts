import { Request, Response } from "express";
import { InterfaceOrders, Order } from "../models/orders";
import { ObjectId } from "mongoose";

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  const { usuarioConfirmado, ...orderData } = req.body;

  const newOrderData: InterfaceOrders = {
    ...orderData,
    user: usuarioConfirmado._id,
    status: "pending",
    createdAt: new Date(),
  };

  const newOrderToDb = new Order(newOrderData);
  await newOrderToDb.save();

  res.status(200).json({
    msj: "La orden se ha procesado correctamente.",
    newOrderData,
  });
};

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  const objectIdUser: ObjectId = req.body.usuarioConfirmado._id;
  const findOrders = await Order.find({ user: objectIdUser });
  res.status(200).json({
    msj: "Petición exitosa.",
    findOrders,
  });
};
