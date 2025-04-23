import { hashPassword } from "./hash";


export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
	const hashedPassword = await hashPassword(password);
	return hashedPassword === hash;
};