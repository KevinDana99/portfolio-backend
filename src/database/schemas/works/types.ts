import works from "../../../mocks/works/works.json";
export type WorkSchemaType = (typeof works)[0];
interface WorkInterface extends WorkSchemaType {}
export interface WorkSchemaInterface extends WorkInterface {}
