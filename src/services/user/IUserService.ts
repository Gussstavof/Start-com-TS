import {User} from "../../entities/User";
import {UserCommand} from "../../commands/UserCommand";

export interface IUserService {
    saveUser(userCommand: UserCommand): Promise<User>
}