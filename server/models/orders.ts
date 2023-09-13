import { Model, ObjectId, Schema, model } from "mongoose";

export interface InterfaceShippingDetails {
  nombreDestinatario: string;
  direccion: string;
  codigoPostal: string | number;
  ciudad: string;
  cellphone: string | number;
}

export interface InterfaceProductDetails {
  categories: string[];
  divisa: string;
  id: number;
  imgGame: string;
  nameGame: string;
  price: number;
  quantity: number;
}

export interface InterfaceOrders {
  user: ObjectId;
  status: string;
  createdAt: Date;
  products: InterfaceProductDetails[];
  shippingDetails: InterfaceShippingDetails;
  shippingCost: number;
}

const SchemaOrders = new Schema<InterfaceOrders>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
  products: {
    type: [
      {
        categories: { type: [String], required: true },
        id: { type: Number, required: true },
        divisa: { type: String, required: true },
        imgGame: { type: String, required: true },
        nameGame: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    required: true,
  },
  shippingDetails: {
    nombreDestinatario: { type: String, required: true },
    direccion: { type: String, required: true },
    codigoPostal: { type: Schema.Types.Mixed, required: true },
    ciudad: { type: String, required: true },
    cellphone: { type: Schema.Types.Mixed, required: true },
  },
  shippingCost: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

export const Order: Model<InterfaceOrders> = model<InterfaceOrders>("Orders", SchemaOrders);
