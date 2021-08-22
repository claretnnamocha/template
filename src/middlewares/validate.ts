import { NextFunction, Response } from "express";
import Joi from "joi";
import { response, types } from "../helpers";

export const validate = (obj: object) => {
  return (
    req: types.interfaces.request.others.CustomRequest,
    res: Response,
    next: NextFunction
  ) => {
    const schema = Joi.object().keys(obj).required().unknown(false);
    const value = req.method == "GET" ? req.query : req.body;
    const { error, value: vars } = schema.validate(value);

    if (error) return response(res, { status: false, message: error.message });

    req.form = req.form || {};

    req.form = { ...req.form, ...vars };

    next();
  };
};
