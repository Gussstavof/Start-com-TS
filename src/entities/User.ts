import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {Post} from "./Post"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    dateEntry: Date

    @Column()
    amountInteraction: number

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]


    constructor(id: number, name: string, dateEntry: Date, amountInteraction: number, posts: Post[]) {
        this.id = id;
        this.name = name;
        this.dateEntry = new Date();
        this.amountInteraction = amountInteraction;
        this.posts = posts;
    }
}
