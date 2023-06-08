import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    comments:string

    @ManyToOne(() => User, (user) => user.posts)
    user: User
}