import { Response } from "express";
import { response, types } from "../helpers";
import { auth } from "../services";

export const signUp = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.signUp(req.form);
  return response(res, data);
};

export const signIn = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.signIn(req.form);
  const { status } = data;
  if (status) {
    const { data: token } = data;
    // delete data.data.token;
    res.cookie("token", token, { httpOnly: true });
    // console.log(token);
  }
  return response(res, data);
};

export const verifyAccount = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.verifyAccount(req.form);
  return response(res, data);
};

export const initiateReset = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.initiateReset(req.form);
  return response(res, data);
};

export const verifyReset = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.verifyReset(req.form);
  return response(res, data);
};

export const resetPassword = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.resetPassword(req.form);
  return response(res, data);
};

export const resendVerificationAccount = async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response
) => {
  const data = await auth.resendVerificationAccount(req.form);
  return response(res, data);
};
