// @ts-ignore
import express, {Router} from "express";
import {UserController} from '../controllers/UserController';
import {PostController} from "../controllers/PostController";

const router = Router();

router
    .get('/posts', PostController.getPostById)
    .post('/users', UserController.createUser);

export default router;