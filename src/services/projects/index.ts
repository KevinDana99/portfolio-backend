import ProjectModel from "../../database/schemas/projects";
import { ProjectSchemaType } from "../../database/schemas/projects/types";
import boom from "@hapi/boom";

class ProjectService {
  public projects: ProjectSchemaType[] = [];
  constructor() {
    this.findAll();
  }

  async findAll() {
    try {
      const allProjects = await ProjectModel.find();
      this.projects = allProjects;
      return allProjects;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    const projects = this.projects;
    const findOneProject = projects.find(
      (project) => project._id.toString() === id
    );
    if (findOneProject) {
      return findOneProject;
    } else {
      throw boom.notFound("the project not found");
    }
  }
  async create(project: ProjectSchemaType) {
    try {
      const newProject = new ProjectModel(project);
      return await newProject.save();
    } catch (e) {
      throw boom.conflict("error in adding project to database");
    }
  }
  async update(id: string, updateProject: ProjectSchemaType) {
    const projects = this.projects;
    const oldProjectIndex = projects.findIndex(
      (project: ProjectSchemaType) => project._id.toString() === id
    );
    const oldProject = projects[oldProjectIndex];
    const newProject = { oldProject, ...updateProject };

    if (oldProjectIndex !== -1) {
      try {
        return await ProjectModel.updateOne({ _id: id }, newProject);
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this requested update project does exist");
    }
  }
  async delete(id: string) {
    const projects = this.projects;
    const deleteProjectIndex = projects.findIndex(
      (project) => project._id.toString() === id
    );

    if (deleteProjectIndex !== -1) {
      try {
        return await ProjectModel.deleteOne({ _id: id });
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this request delete project does exist");
    }
  }
}

export default new ProjectService();
