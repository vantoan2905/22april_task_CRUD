import userRepositories from '../../repositories/user/user.repositories';
import { hashPassword } from '../../utils/hash';
import { comparePassword } from '../../utils/compare_password';
export const register = async (user: any) => {
    let username = user.username;
    let password = user.password;
    let email = user.email;
    // get user by username and email
    const userByUsername = await userRepositories.findByUsername(username);
    const userByEmail = await userRepositories.findByEmail(email);
    if (userByUsername || userByEmail) {
        throw new Error("User already exists");
    }
    console.log(username, password, email);
    let hashedPassword = await hashPassword(password);
    userRepositories.create(username, hashedPassword, email);
    return true

};
export const login = async (email: string, password: string) => {
  const user = await userRepositories.findByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordMatch = await comparePassword(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};
export const forgotPassword = async (email: string) => {};
export const resetPassword = async (token: string, password: string) => {};