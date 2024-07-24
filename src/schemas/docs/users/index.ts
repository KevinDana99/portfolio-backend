import { Schema } from "swagger-jsdoc";

export const allUsersSchema = {
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
      user: {
        type: "string",
      },
      pass: {
        type: "string",
      },
      permission: {
        enum: ["admin", "specter"],
      },
    },

    required: ["id", "name", "pass"],
    description: "Un array que representa a todos los usuarios",
  },
};

export const oneUserSchema: Schema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
    },
    name: {
      type: "string",
    },
    user: {
      type: "string",
    },
    pass: {
      type: "string",
    },
    permission: {
      type: "string",
      enum: ["admin", "specter"],
    },
  },

  required: ["id", "name", "pass"],
  description: "Un objeto que representa a un usuario",
};
