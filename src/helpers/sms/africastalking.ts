import Africastalking from "africastalking";
import Bull from "bull";
import { sendSMS } from "./send";

const {
  AFRICASTALKING_APIKEY,
  AFRICASTALKING_USERNAME,
  AFRICASTALKING_SENDER_ID,
} = process.env;

const _send = async (job: Bull.Job) => {
  let { to, from, body } = job.data;

  const credentials = {
    apiKey: AFRICASTALKING_APIKEY,
    username: AFRICASTALKING_USERNAME,
  };

  const { SMS } = Africastalking(credentials);

  const message = await SMS.send({ to, from, message: body });

  return message != null;
};

export const send = sendSMS({
  callback: _send,
  queueName: "Twilio SMS",
  from: AFRICASTALKING_SENDER_ID,
});
