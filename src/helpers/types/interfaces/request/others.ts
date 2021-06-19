import { Request } from "express";

export default interface RequestInterface {
  form: any;
}

export interface LoggedIn {
  userId: string;
}

export interface CustomRequest
  extends Request<RequestInterface>,
    RequestInterface {}
