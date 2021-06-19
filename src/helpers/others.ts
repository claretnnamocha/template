import { nanoid } from "nanoid";
import { v4 as uuid } from "uuid";
const { Token } = require("../schemas");

export const generateOtp = (
  length: number = 4,
  isOnlyNumeric: boolean = true
) => {
  let char = "1234567890";
  char += isOnlyNumeric ? "" : "qwertyuiopasdfghjklzxcvbnm";
  let otp = "";
  for (let i = 0; i < length; i++)
    otp += Math.floor(Math.random() * char.length);
  return otp;
};

export const generateToken = async (
  userId: string,
  tokenType: string = "verify",
  medium: string = "email",
  expiresMins: number = 5
) => {
  await Token.update(
    { active: false },
    { where: { UserId: userId, tokenType, active: true } }
  );

  const token = nanoid(10);

  await Token.create({
    id: uuid(),
    tokenType,
    token,
    UserId: userId,
    medium,
    expires: Date.now() + 60 * 1000 * expiresMins,
  });

  return token;
};
