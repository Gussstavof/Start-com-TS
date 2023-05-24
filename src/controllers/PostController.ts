import {Request, Response} from "express";

export class PostController {
    public static getPostById = (req: Request, res: Response) => {
        res.status(200).json({'name': 'Ferreira'})
    }
}