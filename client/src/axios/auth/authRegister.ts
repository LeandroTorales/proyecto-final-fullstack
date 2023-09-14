import axios from "axios";
import { BASE_URL_API } from "../../constants/constants";

interface Props {
  nombre: string;
  email: string;
  password: string;
}

export const authRegister = async ({ nombre, email, password }: Props): Promise<{}> => {
  try {
    const response = await axios.post(`${BASE_URL_API}/auth/register`, {
      nombre,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrió un error. Revisa que los campos esten ingresados correctamente.");
  }
};
