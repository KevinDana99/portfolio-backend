export type CertificationSchemaType = {
  _id: string;
  name: string;
  entity: string;
  dateAt: string;
  img: string;
  categories: string;
};
export type CertificationListSchemaType = CertificationSchemaType[];

interface CertificationInterface extends CertificationSchemaType {}
export interface CertificationSchemaInterface extends CertificationInterface {}
