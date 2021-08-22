import { Response } from "express";
import { response } from "../helpers";
import { user } from "../services";
import { CustomRequest } from "../types/controllers";

export const changePassword = async (req: CustomRequest, res: Response) => {
  const data = await user.changePassword(req.form);
  return response(res, data);
};

export const getProfile = async (req: CustomRequest, res: Response) => {
  const data = await user.getProfile(req.form);
  return response(res, data);
};

export const editProfile = async (req: CustomRequest, res: Response) => {
  const data = await user.editProfile(req.form);
  return response(res, data);
};
