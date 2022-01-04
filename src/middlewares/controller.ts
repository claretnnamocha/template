import { Response } from "express";
import { response } from "../helpers";
import { CustomRequest } from "../types/controllers";

export const controller =
  (fn: Function) => async (req: CustomRequest, res: Response) => {
    try {
      const data = await fn(req, res);

      return response(res, data, data.status ? 200 : 400);
    } catch (e) {
      return response(
        res,
        { status: false, message: "Internal server error" },
        500
      );
    }
  };

const sanitize = (obj) => {
  let _obj = JSON.parse(JSON.stringify(obj));
  for (let index in _obj) {
    const found = ["pin", "password", "token"].some((s) =>
      index.toLowerCase().includes(s)
    );
    if (found) _obj[index] = "-classified-";

    if (
      typeof _obj[index] === "object" &&
      !Array.isArray(_obj[index]) &&
      _obj[index] !== null
    )
      _obj[index] = sanitize(_obj[index]);
  }
  return _obj;
};
