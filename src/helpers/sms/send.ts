import * as jobs from "../../jobs";
import { SMSQueue } from "../../jobs/queues";
import { sms } from "../../types/helpers";

export const sendSMS =
  ({ callback, queueName, from }: sms.send) =>
  async (to: string, body: string) => {
    await jobs.add({
      queue: SMSQueue,
      queueName: "sms",
      data: { to, from, body },
      options: { attempts: 5 },
    });

    await jobs.process({
      queueName,
      callback,
      queue: SMSQueue,
    });
  };
