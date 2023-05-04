import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { PostReply } from './entity/PostReply';
import { Repository } from 'typeorm';
import { Post } from './entity/Post';
import { User } from './entity/User';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(
    private readonly logger: Logger,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(PostReply)
    private postReplysRepository: Repository<PostReply>,
  ) { }

  findUsers(query: PaginateQuery): Promise<Paginated<User>> {
    return paginate(query, this.usersRepository, {
      relations: ['posts'],
      sortableColumns: ['id', 'firstName', 'lastName'],
      defaultSortBy: [
        ['firstName', 'ASC'],
        ['lastName', 'ASC'],
        ['id', 'ASC'],
        ['posts.title', 'ASC'],
        ['posts.id', 'ASC'],
      ],
      select: [
        'id',
        'name',
        'displayOrder',
        'post.id',
        'post.title',
        'post.description',
      ],
    });
  }

  findUser(id: number): Promise<User> {
    return this.usersRepository.findOneOrFail({ where: { id } });
  }

  findPosts(query: PaginateQuery): Promise<Paginated<Post>> {
    return paginate(query, this.postsRepository, {
      relations: ['user', 'postReplys'],
      sortableColumns: ['id', 'title', 'description'],
      select: [
        'id',
        'title',
        'description',
        'postReplys.id',
        'postReplys.name',
        'postReplys.displayOrder',
      ],
    });
  }

  findGroup(id: number): Promise<Post> {
    return this.postsRepository.findOneOrFail({ where: { id } });
  }


  findPostReplys(query: PaginateQuery): Promise<Paginated<PostReply>> {
    return paginate(query, this.postReplysRepository, {
      relations: ['post'],
      sortableColumns: ['id', 'title'],
      select: ['id', 'titile'],
      searchableColumns: ['id', 'title'],
    });
  }

  findPostReply(id: number): Promise<PostReply> {
    return this.postReplysRepository.findOneOrFail({ where: { id } });
  }
}
