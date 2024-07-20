import certifications from "../../mocks/certifications/certifications.json";

const findAll = () => {
  return certifications;
};
const findOne = (id: string) => {
  const findOneCertification = certifications.filter(
    (certification) => certification.id.toString() === id
  );
  return findOneCertification;
};

const certificationService = {
  findAll,
  findOne,
};

export default certificationService;
