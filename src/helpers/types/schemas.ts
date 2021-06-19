import { Model } from "sequelize";
import { TokenInterface, UserInterface } from "./interfaces/schemas";

export interface UserSchema extends Model<UserInterface>, UserInterface {}
export interface TokenSchema extends Model<TokenInterface>, TokenInterface {}
