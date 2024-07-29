import WorkModel from "../../database/schemas/works";
import { WorkSchemaType } from "../../database/schemas/works/types";
import boom from "@hapi/boom";

class WorkService {
  public works: WorkSchemaType[] = [];
  constructor() {
    this.findAll();
  }

  async findAll() {
    try {
      const allWorks = await WorkModel.find();
      this.works = allWorks;
      return allWorks;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    const works = this.works;
    const findOneWork = works.find(
      (certification) => certification._id.toString() === id
    );
    if (findOneWork) {
      return findOneWork;
    } else {
      throw boom.notFound("the certification not found");
    }
  }
  async create(certification: WorkSchemaType) {
    try {
      const newWork = new WorkModel(certification);
      return await newWork.save();
    } catch (e) {
      throw boom.conflict("error in adding certification to database");
    }
  }
  async update(id: string, updateWork: WorkSchemaType) {
    const works = this.works;
    const oldWorkIndex = works.findIndex(
      (certification: WorkSchemaType) => certification._id.toString() === id
    );
    const oldWork = works[oldWorkIndex];
    const newWork = { oldWork, ...updateWork };

    if (oldWorkIndex !== -1) {
      try {
        return await WorkModel.updateOne({ _id: id }, newWork);
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this requested update certification does exist");
    }
  }
  async delete(id: string) {
    const works = this.works;
    const deleteWorkIndex = works.findIndex(
      (certification) => certification._id.toString() === id
    );

    if (deleteWorkIndex !== -1) {
      try {
        return await WorkModel.deleteOne({ _id: id });
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this request delete certification does exist");
    }
  }
}

export default new WorkService();
