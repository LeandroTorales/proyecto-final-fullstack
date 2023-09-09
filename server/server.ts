import { configDotenv } from "dotenv";
import { Server } from "./models/server";

configDotenv();

new Server();
