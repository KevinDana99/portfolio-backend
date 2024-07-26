import certifications from "../../mocks/certifications/certifications.json";
export type CertificationSchemaType = (typeof certifications)[0];
interface CertificationInterface extends CertificationSchemaType {}
export interface CertificationSchemaInterface extends CertificationInterface {}
