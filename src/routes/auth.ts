import { Router } from "express";
import { auth } from "../controllers";
import { validate } from "../middlewares";
import { auth as validator } from "../validators";

const routes = Router();

routes.post("/sign-up", validate(validator.signUp), auth.signUp);

routes.post("/sign-in", validate(validator.signIn), auth.signIn);

routes.get("/verify", validate(validator.verify), auth.verifyAccount);

routes.get(
  "/resend-verification",
  validate(validator.resendVerification),
  auth.resendVerificationAccount
);

routes.post(
  "/initiate-reset",
  validate(validator.initiateReset),
  auth.initiateReset
);

routes.get("/verify-reset", validate(validator.verifyReset), auth.verifyReset);

routes.put(
  "/reset-password",
  validate(validator.updateReset),
  auth.resetPassword
);

export default routes;
