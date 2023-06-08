import {Request, Response} from 'express'
import {User} from "../entities/User";
import {inject, injectable} from "tsyringe";
import {IUserService} from "../services/user/IUserService";
import {UserCommand} from "../commands/UserCommand";
import {validate} from "class-validator";

@injectable()
export class UserController {

    constructor(
        @inject("UserService")
        private userService: IUserService
    ) {}

    createUser = async (req: Request, res: Response) => {
        try {
            const userCommand = new UserCommand(req?.body?.name);
            const errors = await validate(userCommand);
            if (errors.length > 0) {
                res.status(400)
                    .json({
                        errors
                    });
            }else {
                this.userService.saveUser(userCommand)
                    .then(r => res.status(201)
                        .json({
                            "id": r.id,
                            "name": r.name
                        })
                    )
            }
        } catch (error) {
            res.status(400)
        }
    }
}