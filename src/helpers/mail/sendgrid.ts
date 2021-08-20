import SendGridMail from "@sendgrid/mail";

const { SENDGRID_API_KEY } = process.env;

export const send = async (
  to: string,
  subject: string,
  text: string,
  html: string = null,
  from: string = "Claret Nnamocha <devclareo@gmail.com>"
) => {
  try {
    SendGridMail.setApiKey(SENDGRID_API_KEY);

    const msg = { to, subject, text, html, from };

    await SendGridMail.send(msg);

    return true;
  } catch (error) {
    return false;
  }
};
