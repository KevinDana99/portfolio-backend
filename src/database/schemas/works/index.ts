import { getModelForClass, prop } from "@typegoose/typegoose";
import { WorkSchemaType } from "./types";

class WorkSchema implements WorkSchemaType {
  public _id!: string;
  @prop({ required: true })
  public title!: string;
  @prop({ required: true })
  public entity!: {
    name: string;
    location: string;
    categories: string[];
    url_site: string;
  };
  @prop({ required: true })
  public init_at!: string;
  @prop({ required: true })
  public finished_at!: string;
  public img!: string;
  @prop({ required: true })
  public roles!: string[];
  @prop({ required: true })
  public technologies!: string[];
  @prop({ required: true })
  public work_mode!: string;
  @prop({ required: true })
  public contract_mode!: string;
}
const WorkModel = getModelForClass(WorkSchema, {
  schemaOptions: { collection: "works", timestamps: true },
});

export default WorkModel;
