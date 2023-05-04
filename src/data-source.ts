import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Post } from "./entity/Post"
import { PostReply } from "./entity/PostReply"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "nestjs",
    synchronize: true,
    logging: false,
    entities: [User, Post, PostReply],
    migrations: [],
    subscribers: [],
})
