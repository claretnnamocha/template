import { Router } from "express";
import { user } from "../controllers";
import { authenticate, controller, validate } from "../middlewares";
import { user as validator } from "../validators";

const routes = Router();
routes.use(authenticate);

routes.get("", controller(user.getProfile));

routes.put(
  "/change-password",
  validate(validator.changePassword),
  controller(user.changePassword)
);

routes.put(
  "/edit-profile",
  validate(validator.editProfile),
  controller(user.editProfile)
);

export default routes;
