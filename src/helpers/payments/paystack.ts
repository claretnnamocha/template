import crypto from "crypto";
import { payments } from "../../types/helpers";

const { PAYSTACK_SECRET_KEY } = process.env;

export const initiateTransaction = (
  params: payments.initiateTransaction
) => {
  // todo: handle payments init
};

export const handleWebhook = (params: payments.webhook) => {
  const { headers, body } = params;

  const hash = crypto
    .createHmac("sha512", PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(body))
    .digest("hex");

  if (hash !== headers["x-paystack-signature"]) {
    return false;
  }

  const payload = body;

  return payload;
};
