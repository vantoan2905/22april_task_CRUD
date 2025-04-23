// /src/repositories/user/user.repositories.ts
import sequelize from "../../database/connection";
import { User } from "../../models/User/user.Model";

class UserRepository {

  async create(username: string, password: string, email: string) {
    const user = await User.create({ username, password, email });
    return user;
  }
  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }
  async findByUsername(username: string) {
    return await User.findOne({ where: { username } });
  }
  async fildAll() {
    return await User.findAll();
  }
}

export default new UserRepository();