import CertificationModel from "../../database/schemas/certifications";
import { CertificationSchemaType } from "../../schemas/certificationSchema";
import boom from "@hapi/boom";

class CertificationService {
  public certifications: CertificationSchemaType[] = [];
  constructor() {
    this.findAll();
  }

  async findAll() {
    try {
      const allCertifications = await CertificationModel.find();
      this.certifications = allCertifications;
      return allCertifications;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    const certifications = this.certifications;
    const findOneCertification = certifications.find(
      (certification) => certification._id.toString() === id
    );
    if (findOneCertification) {
      return findOneCertification;
    } else {
      throw boom.notFound("the certification not found");
    }
  }
  async create(certification: CertificationSchemaType) {
    try {
      const newCertification = new CertificationModel(certification);
      return await newCertification.save();
    } catch (e) {
      throw boom.conflict("error in adding certification to database");
    }
  }
  async update(id: string, updateCertification: CertificationSchemaType) {
    const certifications = this.certifications;
    const oldCertificationIndex = certifications.findIndex(
      (certification: CertificationSchemaType) =>
        certification._id.toString() === id
    );
    const oldCertification = certifications[oldCertificationIndex];
    const newCertification = { oldCertification, ...updateCertification };

    if (oldCertificationIndex !== -1) {
      try {
        return await CertificationModel.updateOne(
          { _id: id },
          newCertification
        );
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this requested update certification does exist");
    }
  }
  async delete(id: string) {
    const certifications = this.certifications;
    const deleteCertificationIndex = certifications.findIndex(
      (certification) => certification._id.toString() === id
    );

    if (deleteCertificationIndex !== -1) {
      try {
        return await CertificationModel.deleteOne({ _id: id });
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this request delete certification does exist");
    }
  }
}

export default new CertificationService();
