// // this is code for user repository
// import { User } from '@/models/User/user.Model';
// import sequelize from '@/database/connection';



// const userModel = User(sequelize);

// export class UserRepository {
//     async findAll() {
//         return await userModel.findAll();
//     }
//     async findById(id: number) {
//         return await userModel.findByPk(id);
//     }
//     async createUser(data: any) {
//         return await userModel.create(data);
//     }
// }