import { getModelForClass, prop } from "@typegoose/typegoose";
import { UserRolType, UserSchemaType } from "./types";

class UserSchema implements UserSchemaType {
  public _id!: string;
  @prop({ required: true })
  public user!: string;
  @prop({ required: true })
  public pass!: string;
  @prop({ required: true })
  public roles!: UserRolType[];
}
const UserModel = getModelForClass(UserSchema, {
  schemaOptions: { collection: "users", timestamps: true },
});

export default UserModel;
