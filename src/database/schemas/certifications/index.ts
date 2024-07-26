import { getModelForClass, prop } from "@typegoose/typegoose";
import { CertificationSchemaType } from "./../../../schemas/certificationSchema/";

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
  public category!: string;
}
const CertificationModel = getModelForClass(CertificationSchema, {
  schemaOptions: { collection: "certifications" },
});

export default CertificationModel;
