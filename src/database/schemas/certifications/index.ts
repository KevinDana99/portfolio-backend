import { getModelForClass, prop } from "@typegoose/typegoose";
import { CertificationSchemaType } from "./types";

class CertificationSchema implements CertificationSchemaType {
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
  public categories!: string;
}
const CertificationModel = getModelForClass(CertificationSchema, {
  schemaOptions: { collection: "certifications", timestamps: true },
});

export default CertificationModel;
