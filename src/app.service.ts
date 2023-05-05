import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { PostReply } from './entity/PostReply';
import { Repository } from 'typeorm';
import { Post } from './entity/Post';
import { User } from './entity/User';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(PostReply)
    private postReplysRepository: Repository<PostReply>,
  ) { }

  findUsers(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.usersRepository, {
      relations: { posts: { postReplys: true } },
      sortableColumns: ['id', 'firstName', 'age', 'lastName', 'posts.id', 'posts.postReplys.title'],
      defaultSortBy: [
        ['firstName', 'ASC'],
        ['lastName', 'ASC'],
        ['id', 'ASC'],
      ],
      select: [
        'id',
        'firstName',
        'lastName',
        'age',
        'posts.id',
        'posts.title',
        'posts.description',
        'posts.postReplys.title',
      ],
    });
  }
}
