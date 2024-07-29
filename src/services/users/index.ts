import UserModel from "../../database/schemas/users";
import { UserSchemaType } from "../../database/schemas/users/types";
import boom from "@hapi/boom";

class UserService {
  public users: UserSchemaType[] = [];
  constructor() {
    this.findAll();
  }

  async findAll() {
    try {
      const allUsers = await UserModel.find();
      this.users = allUsers;
      return allUsers;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    const users = this.users;
    const findOneUser = users.find((user) => user._id.toString() === id);
    if (findOneUser) {
      return findOneUser;
    } else {
      throw boom.notFound("the user not found");
    }
  }
  async create(user: UserSchemaType) {
    try {
      const newUser = new UserModel(user);
      return await newUser.save();
    } catch (e) {
      throw boom.conflict("error in adding user to database");
    }
  }
  async update(id: string, updateUser: UserSchemaType) {
    const users = this.users;
    const oldUserIndex = users.findIndex(
      (user: UserSchemaType) => user._id.toString() === id
    );
    const oldUser = users[oldUserIndex];
    const newUser = { oldUser, ...updateUser };

    if (oldUserIndex !== -1) {
      try {
        return await UserModel.updateOne({ _id: id }, newUser);
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this requested update user does exist");
    }
  }
  async delete(id: string) {
    const users = this.users;
    const deleteUserIndex = users.findIndex(
      (user) => user._id.toString() === id
    );

    if (deleteUserIndex !== -1) {
      try {
        return await UserModel.deleteOne({ _id: id });
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this request delete user does exist");
    }
  }
}

export default new UserService();
