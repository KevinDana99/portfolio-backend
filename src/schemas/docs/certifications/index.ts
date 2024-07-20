export const allCertificationsSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        format: "int64",
      },
      name: {
        type: "string",
      },
      entity: {
        type: "string",
      },
      dateAt: {
        type: "string",
      },
      img: {
        type: "string",
      },
      category: {
        type: "string",
      },
    },

    required: ["id", "name", "entity", "img"],
    description: "Un objeto que representa a un usuario",
  },
};

export const oneCertificationSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
    },
    name: {
      type: "string",
    },
    entity: {
      type: "string",
    },
    dateAt: {
      type: "string",
    },
    img: {
      type: "string",
    },
    category: {
      type: "string",
    },
  },

  required: ["id", "name", "entity", "img"],
  description: "Un objeto que representa a un usuario",
};
