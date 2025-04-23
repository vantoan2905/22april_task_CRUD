import { v4 as uuidv4 } from "uuid";
import { logger } from "../../middlewares/logger";
import userRepositories from "../../repositories/user/user.repositories";
class UserService {
  async register(username: string, password: string, email: string) {
    // console.log(username, password, email);

    const user = await userRepositories.create(username, password, email );

    return true
  } 

  async login(username: string, password: string) {
    return []
  }
}
export default new UserService();