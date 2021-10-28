import Bull from "bull";
import Twilio from "twilio";
import { sendSMS } from "./send";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SENDER_ID } = process.env;

const _send = async (job: Bull.Job) => {
  let { to, from, body } = job.data;

  const twilio = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

  const message = await twilio.messages.create({
    to,
    from,
    body,
  });

  return message.sid != null;
};

export const send = sendSMS({
  callback: _send,
  queueName: "Twilio SMS",
  from: TWILIO_SENDER_ID,
});
