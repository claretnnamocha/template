import { db } from "../configs/db";
import _Token from "./Token";
import _User from "./User";

const User = _User(db);
const Token = _Token(db);

export { User, Token };

