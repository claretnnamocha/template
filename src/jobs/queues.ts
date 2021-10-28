import { create } from "./create";

export const EmailQueue = create({ queueName: "email" });
export const SMSQueue = create({ queueName: "sms" });
