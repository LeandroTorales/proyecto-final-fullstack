import axios from "axios";
import { BASE_URL_API } from "../../constants/constants";
export interface InterfaceProductDetails {
  categories: string[];
  divisa: string;
  id: number;
  imgGame: string;
  nameGame: string;
  price: number;
  quantity: number;
}
export interface InterfaceShippingDetails {
  nombreDestinatario: string;
  direccion: string;
  codigoPostal: string | number;
  ciudad: string;
  cellphone: string | number;
}

interface Props {
  userToken: string;
  order: {
    products: InterfaceProductDetails[];
    shippingDetails: InterfaceShippingDetails;
    shippingCost: number;
  };
}

export const createOrder = async ({ userToken, order }: Props): Promise<{}> => {
  try {
    const response = await axios.post(`${BASE_URL_API}/orders`, order, {
      headers: {
        "user-token": userToken,
      },
    });
    return response.data.newOrderData;
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al procesar la orden.");
  }
};
