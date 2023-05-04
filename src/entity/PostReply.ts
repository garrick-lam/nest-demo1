import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Post } from "./Post"

@Entity()
export class PostReply {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @ManyToOne(() => Post, (post) => post.postReplys, {
        nullable: false,
        eager: true,
    })
    post: Post
}
