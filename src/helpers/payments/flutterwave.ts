import { payments } from "../../types/helpers";

const { FLUTTERWAVE_HASH } = process.env;

export const initiateTransaction = (params: payments.initiateTransaction) => {
  // todo: handle payments init
};

export const handleWebhook = (params: payments.webhook) => {
  const { headers, body } = params;

  if (headers["verif-hash"] !== FLUTTERWAVE_HASH) {
    return false;
  }

  const payload = JSON.parse(body);

  return payload;
};
