import { getModelForClass, prop } from "@typegoose/typegoose";
import { ReviewSchemaType } from "./types";

class ReviewSchema implements ReviewSchemaType {
  public _id!: string;
  @prop({ required: true })
  public title!: string;
  @prop({ required: true })
  public description!: string;
}
const ReviewModel = getModelForClass(ReviewSchema, {
  schemaOptions: { collection: "reviews", timestamps: true },
});

export default ReviewModel;
