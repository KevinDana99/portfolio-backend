const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio REST API",
      version: "1.0.0",
      description:
        "Esta REST API brindara endpoints para obtener datos del portfolio",
    },
  },
  apis: ["./src/routes/v1/**/*.docs.ts"],
};

export default swaggerConfig;
