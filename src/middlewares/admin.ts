import { NextFunction, Response } from "express";
import JWT from "jsonwebtoken";
import { env } from "../configs";
import { response, types } from "../helpers";
import { UserSchema } from "../helpers/types/schemas";
import { User } from "../schemas";

export default async (
  req: types.interfaces.request.others.CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return response(res, { status: false, message: "Unauthorized" }, 401);

    const { payload: userId }: any = JWT.verify(
      authorization.replace("Bearer ", ""),
      env.jwtSecret
    );

    if (!userId)
      return response(res, { status: false, message: "Unauthorized" }, 401);

    const user: UserSchema = await User.findOne({
      where: { id: userId, active: true, isDeleted: false },
    });

    if (!user)
      return response(res, { status: false, message: "Unauthorized" }, 401);

    req.form = req.form || {};
    req.form.userId = user.id;

    next();
  } catch (e) {
    return response(res, { status: false, message: "Unauthorized" }, 401);
  }
};
