import Bull from "bull";

export interface send {
  queueName: string;
  from: string;
  callback: Bull.ProcessCallbackFunction<any>;
}
