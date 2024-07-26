import certifications from "../../mocks/certifications/certifications.json";
type CertificationType = (typeof certifications)[0];
interface CertificationInterface extends CertificationType {}
export interface CertificationSchemaType extends CertificationInterface {}
