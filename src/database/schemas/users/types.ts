import users from "../../../mocks/users/users.json";
export type UserSchemaType = (typeof users)[0];
export type UserRolType = "admin" | "read" | "writeRead";
interface UserInterface extends Omit<UserSchemaType, "roles"> {
  roles: UserRolType[];
}
export interface UserSchemaInterface extends UserInterface {}
