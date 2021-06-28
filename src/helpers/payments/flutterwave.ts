import { transaction } from "../types/interfaces/request";

export const initiateTransaction = (
  params: transaction.initiateTransaction
) => {
  // todo: handle transaction init
};

export const handleWebhook = (params: transaction.webhook) => {
  const { headers, body } = params;

  if (headers["verif-hash"] !== process.env.FLUTTERWAVE_HASH) {
    return false;
  }

  const payload = JSON.parse(body);

  return payload;
};
