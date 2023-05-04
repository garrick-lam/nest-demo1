import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/User';
import { Post } from './entity/Post';
import { PostReply } from './entity/PostReply';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "password",
      database: "nestjs",
      entities: { User, Post, PostReply },
      // autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([User, Post, PostReply]),
  ],
  controllers: [AppController],
  providers: [Logger, AppService],
})
export class AppModule {}
