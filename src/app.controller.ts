import { Controller, Get } from '@nestjs/common';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { AppService } from './app.service';
import { User } from './entity/User';
import { Post } from './entity/Post';
import { PostReply } from './entity/PostReply';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/users')
  findUsers(@Paginate() query: PaginateQuery): Promise<Paginated<User>> {
    return this.appService.findUsers(query);
  }

  // http://localhost:3000/users?limit=30&sortBy=posts.postReplys.title:ASC

  @Get('/posts')
  findPosts(@Paginate() query: PaginateQuery): Promise<Paginated<Post>> {
    return this.appService.findPosts(query);
  }

  @Get('/postReplys')
  findPostReplys(@Paginate() query: PaginateQuery): Promise<Paginated<PostReply>> {
    return this.appService.findPostReplys(query);
  }
}
