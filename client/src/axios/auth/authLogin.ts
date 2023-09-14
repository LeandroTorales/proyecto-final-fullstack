import axios from "axios";
import { BASE_URL_API } from "../../constants/constants";

interface Props {
  email: string;
  password: string;
}

interface PropsUser {
  usuario: { nombre: string; email: string; rol: string };
  msj: string;
  token: string;
}

export const authLogin = async ({ email, password }: Props): Promise<PropsUser> => {
  try {
    const response = await axios.post(`${BASE_URL_API}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrió un error. Revisa que los campos esten ingresados correctamente.");
  }
};
