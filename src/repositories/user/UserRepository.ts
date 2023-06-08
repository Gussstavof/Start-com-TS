import {IUserRepository} from "./IUserRepository";
import {User} from "../../entities/User";
import AppDataSource from "../../data-source";

export class UserRepository implements IUserRepository{
    async setUserRepository() {
        if(AppDataSource.isConnected){
            await AppDataSource.destroy();
        }
        await AppDataSource.initialize();
        return AppDataSource.getRepository<User>(User);
    }

    getById(): Promise<User> {
        return Promise.resolve(undefined);
    }

    async save(t: User): Promise<User> {
        return (await this.setUserRepository()).save(t)
    }
}