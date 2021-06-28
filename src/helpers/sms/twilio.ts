import Twilio from "twilio";

export const send = async (
  to: string,
  body: string,
  from: string = "AfrimMart"
) => {
  try {
    const twilio = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const message = await twilio.messages.create({
      to,
      from,
      body,
    });

    return message.sid != null;
  } catch (error) {
    return false;
  }
};
