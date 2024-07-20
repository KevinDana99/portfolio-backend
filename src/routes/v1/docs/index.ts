import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerConfig from "../../../../swagger.config";

const swaggerSpec = swaggerJsdoc(swaggerConfig);

const router = express.Router();

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
