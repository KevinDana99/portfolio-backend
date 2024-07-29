import { SwaggerOptions } from "swagger-ui-express";
import dotenv from "dotenv";
import { PORT } from "./src/constants";
import * as CertificationSchema from "./src/swagger/schemas/certifications.schema.json";

dotenv.config();

const { CertificationSchemaType, CertificationListSchemaType } =
  CertificationSchema.definitions;

const swaggerConfig: SwaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio REST API",
      version: "1.0.0",
      description:
        "Esta REST API brindara endpoints para obtener datos del portfolio",
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/v1`,
        description: "Servidor de desarrollo",
      },
    ],

    components: {
      schemas: {
        CertificationListSchemaType,
        CertificationSchemaType,
      },
    },
  },

  apis: ["./src/routes/v1/**/*.docs.yaml"],
};

export default swaggerConfig;
