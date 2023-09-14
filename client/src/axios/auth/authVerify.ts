import axios from "axios";
import { BASE_URL_API } from "../../constants/constants";

interface Props {
  email: string;
  newCode: number;
}

export const authVerify = async ({ email, newCode }: Props): Promise<{}> => {
  const code = Number(newCode);
  try {
    const response = await axios.patch(`${BASE_URL_API}/auth/verify`, {
      email,
      code,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrió un error.");
  }
};
