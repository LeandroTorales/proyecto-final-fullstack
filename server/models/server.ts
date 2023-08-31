import express, { Express } from "express";
import cors from "cors";
import { conexionADB } from "../database/conexionADB";
import { authRouter } from "../routes/auth";

export class Server {
  app: Express;
  puerto: string | number | undefined;
  authPath: string;

  constructor() {
    this.app = express();
    this.puerto = process.env.PORT;
    this.authPath = "/auth";
    this.middlewares();
    this.conectarADB();
    this.routes();
    this.listen();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  async conectarADB(): Promise<void> {
    await conexionADB();
  }

  routes(): void {
    this.app.use(this.authPath, authRouter);
  }

  listen(): void {
    this.app.listen(this.puerto, () => {
      console.log(`Escuchando en el puerto ${this.puerto}`);
    });
  }
}
