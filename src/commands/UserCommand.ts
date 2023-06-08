import {Column, PrimaryGeneratedColumn} from "typeorm";
import {IsAlphanumeric, IsNotEmpty, IsString, Length, MaxLength} from "class-validator";
import {Request} from "express";
import {User} from "../entities/User";
import {Post} from "../entities/Post";

export class UserCommand{

    private _id?: number

    @IsString()
    @IsAlphanumeric()
    @MaxLength(14)
    @IsNotEmpty() private _name: string

    private _dateEntry: Date

    private _amountInteraction?: number

    private _posts?: Post[]
    constructor(name: string) {
        this._name = name;
    }

    set id(value: number) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set dateEntry(value: Date) {
        this._dateEntry = value;
    }

    set amountInteraction(value: number) {
        this._amountInteraction = value;
    }

    set posts(value: Post[]) {
        this._posts = value;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get dateEntry(): Date {
        return this._dateEntry;
    }

    get amountInteraction(): number {
        return this._amountInteraction;
    }

    get posts(): Post[] {
        return this._posts;
    }

    public static toArray(userCreated: User){
        return {
            id: userCreated.id,
            name: userCreated.name,
            dateEntry: userCreated.dateEntry,
            amountInteraction: userCreated.amountInteraction,
            posts: userCreated.posts
        }
    }

    public toUser(){
        return new User(
            this._id,
            this._name,
            this._dateEntry,
            this._amountInteraction,
            this._posts
        )
    }

}