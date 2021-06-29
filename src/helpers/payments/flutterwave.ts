import { transaction } from "../types/interfaces/request";

const { FLUTTERWAVE_HASH } = process.env;

export const initiateTransaction = (
  params: transaction.initiateTransaction
) => {
  // todo: handle transaction init
};

export const handleWebhook = (params: transaction.webhook) => {
  const { headers, body } = params;

  if (headers["verif-hash"] !== FLUTTERWAVE_HASH) {
    return false;
  }

  const payload = JSON.parse(body);

  return payload;
};
