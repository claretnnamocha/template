import { Response, Router } from "express";
import { response } from "../helpers";
import auth from "./auth";
import user from "./user";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export default routes;
