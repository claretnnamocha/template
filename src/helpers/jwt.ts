import JWT from "jsonwebtoken";
import { env } from "../configs";
import { User } from "../schemas";

export const generate = (userId: string) => {
  return JWT.sign({ userId, timestamp: Date.now() }, env.jwtSecret, {
    expiresIn: env.jwtExpirationTime,
  });
};

export const verify = async (token: string) => {
  try {
    token = token.replace("Bearer ", "");
    const data: any = JWT.verify(token, env.jwtSecret);

    let {
      data: { userId },
    } = data;
    if (!userId) return false;

    return (await User.findByPk(userId)) !== null;
  } catch (error) {
    return false;
  }
};
