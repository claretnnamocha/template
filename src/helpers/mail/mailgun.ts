import Bull from "bull";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { sendEmail } from "./send";

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_USERNAME } = process.env;

const _send = async (job: Bull.Job) => {
  let { to, subject, text, html, from, fromName } = job.data;
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: MAILGUN_USERNAME,
    key: MAILGUN_API_KEY,
  });

  from = `${fromName} <${from}>`;

  await mg.messages.create(MAILGUN_DOMAIN, {
    from,
    to: [to],
    subject,
    text,
    html,
  });

  return true;
};

export const send = sendEmail({ callback: _send, queueName: "MailGun Email" });
