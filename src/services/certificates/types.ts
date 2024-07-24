export type certificationSchemaType = {
  id: number;
  name: string;
  entity: string;
  dateAt: string;
  img: string;
  category: string;
};

export type certificationServiceType = certificationSchemaType[];
