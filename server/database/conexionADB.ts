import mongoose from "mongoose";

export const conexionADB = async (): Promise<void> => {
  try {
    const DB_URL = process.env.DB_URL;
    if (!DB_URL) {
      throw new Error("Parece que la URL de la base de datos es incorrecta");
    }
    await mongoose.connect(DB_URL);
    console.log("Se ha conectado a la base de datos");
  } catch (error) {
    console.log(error);
    throw new Error("Algo salió mal con la conexión de a la base de datos");
  }
};
