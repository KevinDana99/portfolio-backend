import projects from "../../../mocks/projects/projects.json";
export type ProjectSchemaType = (typeof projects)[0];
interface ProjectInterface extends ProjectSchemaType {}
export interface ProjectSchemaInterface extends ProjectInterface {}
