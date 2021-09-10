import cors from "cors";
import { config } from "dotenv";
import express, { NextFunction, Response } from "express";
import formdata from "express-form-data";
import swaggerUi from "swagger-ui-express";
import { db, env, swagger } from "./configs";
import { response } from "./helpers";
import { CustomRequest } from "./types/controllers";
import routes from "./routes";

config();
const app = express();
const port: number = env.port;
db.authenticate(db.db);

app.use(formdata.parse());
app.use(express.json({ limit: "100mb", type: "application/json" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger.config));
app.use("", routes);

app.use((err: Error, req: CustomRequest, res: Response, next: NextFunction) => {
  return response(
    res,
    { status: false, message: `Internal server error: ${err.message}` },
    500
  );
});

if (require.main) {
  app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
  });
}

export default app;
