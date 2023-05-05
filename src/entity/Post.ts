import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { User } from "./User"
import { PostReply } from "./PostReply"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.posts, {
        nullable: false,
        eager: true,
    })
    user: User

    // @OneToMany(() => PostReply, (postReply) => postReply.post)
    // postReplys: PostReply[]


    @ManyToMany(() => PostReply)
    @JoinTable({
      name: 'post_postreply',
      joinColumn: {
        name: 'postId',
      },
      inverseJoinColumn: {
        name: 'postReplyId',
      },
    })
    postReplys: PostReply[]
}
