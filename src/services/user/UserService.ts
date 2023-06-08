import {User} from '../../entities/User';
import {IUserRepository} from "../../repositories/user/IUserRepository";
import {inject, injectable} from "tsyringe";
import {IUserService} from "./IUserService";
import {UserCommand} from "../../commands/UserCommand";
@injectable()
export class UserService implements IUserService{

    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

     async saveUser(userCommand: UserCommand): Promise<User>{
        const userCreated = await this.userRepository
           .save(userCommand.toUser());
        return UserCommand.toArray(userCreated)
    }
}