import { Response } from "express";

export default (res: Response, data: object, code: number = 200) => {
  res.status(code).send({ ...data, timestamp: new Date().toJSON() });
};
