import { Response } from "express";
import { response, types } from "../helpers";
import { user } from "../services";

export const changePassword = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await user.changePassword(req.form);
  return response(res, data);
};

export const getProfile = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await user.getProfile(req.form);
  return response(res, data);
};

export const editProfile = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await user.editProfile(req.form);
  return response(res, data);
};
