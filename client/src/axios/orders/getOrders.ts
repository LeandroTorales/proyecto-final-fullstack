import axios from "axios";
import { BASE_URL_API } from "../../constants/constants";

interface Props {
  token: string;
}

export const getOrders = async ({ token }: Props): Promise<[]> => {
  try {
    const response = await axios.get(`${BASE_URL_API}/orders`, {
      headers: {
        "user-token": token,
      },
    });
    return response.data.findOrders;
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al consultar las ordenes de usuario.");
  }
};
