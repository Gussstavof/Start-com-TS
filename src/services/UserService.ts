import {User} from '../entities/User';
import AppDataSource from "../data-source";

export class UserService {
    static async saveUser(user: User): Promise<User>{
        await AppDataSource.initialize();
        const userRepository = await AppDataSource.getRepository(User);
        return  await userRepository.save(user)
    }
}