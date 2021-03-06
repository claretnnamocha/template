import { user } from "../services";
import { CustomRequest } from "../types/controllers";

export const changePassword = async (req: CustomRequest) => {
  const data = await user.changePassword(req.form);
  return data;
};

export const getProfile = async (req: CustomRequest) => {
  const data = await user.getProfile(req.form);
  return data;
};

export const editProfile = async (req: CustomRequest) => {
  const data = await user.editProfile(req.form);
  return data;
};
