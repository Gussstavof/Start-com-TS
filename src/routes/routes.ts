// @ts-ignore
import express, {Router} from "express";
import {UserController} from '../controllers/UserController';
import {PostController} from "../controllers/PostController";
import container from "../container";

const router = Router();

const userController = container.resolve(UserController);

router
    .get('/posts', PostController.getPostById)
    .post('/users', userController.createUser);

export default router;