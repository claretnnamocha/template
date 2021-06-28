import crypto from "crypto";
import { transaction } from "../types/interfaces/request";

export const initiateTransaction = (
  params: transaction.initiateTransaction
) => {
  // todo: handle transaction init
};

export const handleWebhook = (params: transaction.webhook) => {
  const { headers, body } = params;

  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(body))
    .digest("hex");

  if (hash !== headers["x-paystack-signature"]) {
    return false;
  }

  const payload = body;

  return payload;
};
