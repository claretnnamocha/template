import { v4 as uuid } from "uuid";
import { request } from "../";
import { transaction } from "../types/interfaces/request";

export const initiateTransaction = (
  params: transaction.initiateTransaction
) => {
  const order_id = uuid();

  const order: any = request(
    `${process.env.COINGATE_BASEURL}/orders`,
    "post",
    {
      order_id,
      price_amount: params.amount,
      price_currency: "ngn",
      receive_currency: "ngn",
      callback_url: process.env.COINGATE_CALLBACK_URL,
    },
    { Authorization: process.env.COINGATE_APIKEY }
  );

  if (!order.id) {
    return false;
  }

  const checkOut: any = request(
    `${process.env.COINGATE_BASEURL}/orders/${order.id}/checkout`,
    "post",
    { pay_currency: params.metadata.currency },
    { Authorization: process.env.COINGATE_APIKEY }
  );

  if (!checkOut.id) {
    return false;
  }

  // todo: handle transaction init checkOut object
  //   {
  //     "id": int,
  //     "order_id": string,
  //     "pay_amount": string (number),
  //     "pay_currency": string,
  //     "payment_address": string,
  //     "payment_url": string.\,
  //     "price_amount": string (number),
  //     "price_currency": "ngn",
  //     "receive_amount": string (number),
  //     "receive_currency": "ngn",
  //     "status": "pending",
  // }
};

export const handleWebhook = (params: transaction.webhook) => {
  const { body } = params;

  const payload = body;

  return payload;
};
