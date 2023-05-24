import {Request, Response} from 'express'
import {UserService} from "../services/UserService";
import {User} from "../entities/User";
export class UserController{

    static createUser = (req: Request, res: Response) => {
       UserService.saveUser(new User(req.body.name))
           .then(r => res.status(201)
               .json({
                       "id": r.id,
                       "name": r.name
               })
           )
    }
}