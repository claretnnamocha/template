import SendGridMail from "@sendgrid/mail";
import Bull from "bull";
import { sendEmail } from "./send";

const { SENDGRID_API_KEY } = process.env;

const _send = async (job: Bull.Job) => {
  let { to, subject, text, html, from, fromName } = job.data;
  SendGridMail.setApiKey(SENDGRID_API_KEY);

  from = `${fromName} <${from}>`;

  const msg = { to, subject, text, html, from };

  await SendGridMail.send(msg);
};

export const send = sendEmail({ callback: _send, queueName: "SendGrid Email" });
