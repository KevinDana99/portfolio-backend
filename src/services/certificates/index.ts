import { certificationSchemaType, certificationServiceType } from "./types";
import boom from "@hapi/boom";
const certifications: certificationServiceType = [];

export const findAllCertification = () => {
  return certifications;
};
export const findOneCertification = (id: string) => {
  const findOneCertification = certifications.find(
    (certification) => certification.id.toString() === id
  );
  if (findOneCertification) {
    return findOneCertification;
  } else {
    throw boom.notFound("the certification not found");
  }
};

export const createCertification = (certification: certificationSchemaType) => {
  const id = certification.id.toString();
  const createdCertification = certifications.find(
    (certification) => certification.id.toString() === id
  );
  if (createdCertification) {
    throw boom.conflict("the certificate is already created");
  } else {
    certifications.push(certification);
    return certification;
  }
};

export const updateCertification = (
  id: string,
  updateCertification: certificationSchemaType
) => {
  const oldCertificationIndex = certifications.findIndex(
    (certification) => certification.id.toString() === id
  );
  const oldCertification = certifications[oldCertificationIndex];
  const newCertification = { ...oldCertification, ...updateCertification };
  certifications[oldCertificationIndex] = newCertification;
  if (oldCertificationIndex !== -1) {
    return updateCertification;
  } else {
    throw boom.notFound("this requested update certification does exist");
  }
};

export const deleteCertification = (id: string) => {
  const deleteCertificationIndex = certifications.findIndex(
    (certification) => certification.id.toString() === id
  );
  certifications.splice(deleteCertificationIndex, 1);

  if (deleteCertificationIndex !== -1) {
    return id;
  } else {
    throw boom.notFound("this request delete certification does exist");
  }
};
