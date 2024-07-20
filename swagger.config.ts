import { SwaggerOptions } from "swagger-ui-express";
import dotenv from "dotenv";
import { PORT } from "./src/constants";
import {
  allCertificationsSchema,
  oneCertificationSchema,
} from "./src/schemas/docs/certifications";
dotenv.config();
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
        certifications: allCertificationsSchema,
        certification: oneCertificationSchema,
      },
    },
  },

  apis: ["./src/routes/v1/**/*.docs.ts"],
};

export default swaggerConfig;
