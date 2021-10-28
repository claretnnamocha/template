import Bull from "bull";
import SibApiV3Sdk from "sib-api-v3-sdk";
import { sendEmail } from "./send";

const { SENDINBLUE_API_KEY } = process.env;

const _send = async (job: Bull.Job) => {
  let { to, subject, text, html, from, fromName } = job.data;

  let defaultClient = SibApiV3Sdk.ApiClient.instance;

  let apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = SENDINBLUE_API_KEY;

  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.sender = { name: fromName, email: from };
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = html;
  sendSmtpEmail.textContent = text;

  sendSmtpEmail.to = [{ email: to }];
  await apiInstance.sendTransacEmail(sendSmtpEmail);

  return true;
};

export const send = sendEmail({
  callback: _send,
  queueName: "SendinBlue Email",
});
