import CertificationModel from "../../database/schemas/certifications";
import { certificationSchemaType } from "./types";
import boom from "@hapi/boom";

export const findAllCertification = async () => {
  try {
    const allCertifications = await CertificationModel.find();
    return allCertifications;
  } catch (error) {
    throw error;
  }
};
export const findOneCertification = async (id: string) => {
  const findOneCertification = (await findAllCertification()).find(
    (certification) => certification.id.toString() === id
  );
  if (findOneCertification) {
    return findOneCertification;
  } else {
    throw boom.notFound("the certification not found");
  }
};

export const createCertification = async (
  certification: certificationSchemaType
) => {
  try {
    const newCertification = new CertificationModel(certification);
    return await newCertification.save();
  } catch (e) {
    throw boom.conflict("error in adding certification to database");
  }
};

export const updateCertification = async (
  id: string,
  updateCertification: certificationSchemaType
) => {
  const certifications = await findAllCertification();
  const oldCertificationIndex = (await findAllCertification()).findIndex(
    (certification: certificationSchemaType) =>
      certification.id.toString() === id
  );
  const oldCertification = certifications[oldCertificationIndex];
  const newCertification = { oldCertification, ...updateCertification };

  if (oldCertificationIndex !== -1) {
    try {
      return await CertificationModel.updateOne({ id }, newCertification);
    } catch (error) {
      throw error;
    }
  } else {
    throw boom.notFound("this requested update certification does exist");
  }
};

export const deleteCertification = async (id: string) => {
  const currentCertifications = await findAllCertification();
  const deleteCertificationIndex = currentCertifications.findIndex(
    (certification) => certification.id.toString() === id
  );

  if (deleteCertificationIndex !== -1) {
    try {
      return await CertificationModel.deleteOne({ id });
    } catch (error) {
      throw error;
    }
  } else {
    throw boom.notFound("this request delete certification does exist");
  }
};
