import { Router } from "express";
import { user } from "../controllers";
import { validate } from "../middlewares";
import { user as validator } from "../validators";
import { authenticate } from "../middlewares";

const routes = Router();
routes.use(authenticate);

routes.get("", user.getProfile);

routes.put(
  "/change-password",
  validate(validator.changePassword),
  user.changePassword
);

routes.put("/edit-profile", validate(validator.editProfile), user.editProfile);

export default routes;
