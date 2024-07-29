import { getModelForClass, prop } from "@typegoose/typegoose";
import { ProjectSchemaType } from "./types";

class ProjectSchema implements ProjectSchemaType {
  public _id!: string;
  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public dateAt!: string;
  @prop({ required: true })
  public entity!: string;
  @prop({ required: true })
  public img!: string;
  @prop({ required: true })
  public categories!: string[];
  @prop({ required: true })
  public technologies!: string[];
}
const ProjectModel = getModelForClass(ProjectSchema, {
  schemaOptions: { collection: "projects", timestamps: true },
});

export default ProjectModel;
