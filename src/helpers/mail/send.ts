import * as jobs from "../../jobs";
import { EmailQueue } from "../../jobs/queues";
import { mail } from "../../types";

const { EMAIL_FROM, EMAIL_NAME } = process.env;

export const sendEmail =
  ({ callback, queueName }: mail.send) =>
  async (
    to: string,
    subject: string,
    text: string,
    html: string = null,
    from: string = EMAIL_FROM,
    fromName: string = EMAIL_NAME
  ) => {
    await jobs.add({
      queue: EmailQueue,
      queueName,
      data: { to, subject, text, html, from, fromName },
      options: { attempts: 5 },
    });

    await jobs.process({
      queueName,
      callback,
      queue: EmailQueue,
    });
  };
