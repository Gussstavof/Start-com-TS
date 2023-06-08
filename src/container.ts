import { container } from "tsyringe";
import { IUserRepository } from "./repositories/user/IUserRepository";
import { UserRepository } from "./repositories/user/UserRepository";
import {IUserService} from "./services/user/IUserService";
import {UserService} from "./services/user/UserService";

container.register<IUserRepository>("UserRepository", {
    useClass: UserRepository,
});

container.register<IUserService>("UserService", {
    useClass: UserService,
});

export default container