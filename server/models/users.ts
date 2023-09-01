import { Model, Schema, model } from "mongoose";
import { ROLES } from "../constants/roles";

export interface InterfaceUsers {
  nombre: string;
  email: string;
  password: string;
  rol?: string;
  code?: number;
  verified?: boolean;
}

const SchemaUsuario = new Schema<InterfaceUsers>({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El email es requerido"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es requerida"],
  },
  rol: {
    type: String,
    default: ROLES.user,
  },
  code: {
    type: Number,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

SchemaUsuario.methods.toJSON = function () {
  const { __v, password, _id, code, rol, verified, ...Usuario } = this.toObject();
  return Usuario;
};

export const Usuario: Model<InterfaceUsers> = model<InterfaceUsers>("Usuarios", SchemaUsuario);
