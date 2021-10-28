import Bull from "bull";

export interface send {
  queueName: string;
  callback: Bull.ProcessCallbackFunction<any>;
}
