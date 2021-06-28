import swaggerJsDoc, { Options } from "swagger-jsdoc";
import { port } from "./env";

const swagger: Options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      description: "Template backend",
      title: "Template Backend API",
      contact: { name: "Claret Nnamocha", email: "devclareo@gmail.com" },
      servers: [{ url: `http://localhost:${port}` }],
    },
  },
  apis: ["./src/docs/*.yml"],
};

const config = swaggerJsDoc(swagger);

export { config };
