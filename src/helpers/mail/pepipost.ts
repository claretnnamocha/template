import Bull from "bull";
import fetch from "node-fetch";
import { sendEmail } from "./send";

const { NETCORE_API } = process.env;

const _send = async (job: Bull.Job) => {
  let { to, subject, text, html, from, fromName } = job.data;
  const options = {
    method: "POST",
    headers: { api_key: NETCORE_API, "content-type": "application/json" },
    body: JSON.stringify({
      from: { email: from, name: fromName },
      subject,
      content: [{ type: "html", value: html }],
      personalizations: [{ to: [{ email: to }] }],
    }),
  };

  await fetch("https://api.pepipost.com/v5.1/mail/send", options);

  return true;
};

export const send = sendEmail({ callback: _send, queueName: "Pepipost Email" });
