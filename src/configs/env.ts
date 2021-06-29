import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test", "provision")
    .default("development"),
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.string().required(),
  DB_URL: Joi.string().required().description("Database connection URL"),
  DB_DIALECT: Joi.string().required().description("Database type"),
})
  .unknown()
  .required();

const { error, value: _env } = schema.validate(process.env);

if (error) throw error;

const env = _env.NODE_ENV;
const port = _env.PORT;
const dbURL = _env.DB_URL;
const jwtSecret = _env.JWT_SECRET;
const jwtExpirationTime = _env.JWT_EXPIRATION_TIME;
const dialect = _env.DB_DIALECT;

export { env, port, dbURL, jwtSecret, jwtExpirationTime, dialect };
