import { sign } from "jsonwebtoken";

export const generarTokenJWT = async (idUser: string): Promise<string | undefined> => {
  return new Promise<string | undefined>((resolve, reject) => {
    sign(idUser, process.env.KEYFORTOKENS as string, (error, token) => {
      error ? reject(error) : resolve(token);
    });
  });
};
