import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  describe("/users (GET)", () => {
    it("should return 5 users and their posts with limit=5&sortBy=user.id:ASC parameters", () => {
      return request(app.getHttpServer())
        .get("/users?limit=5&sortBy=user.id:ASC")
        .set("Accept", "application/json")
        .expect((response: request.Response) => {
          const { data } = response.body;
          expect(data).toHaveLength(5)
        })
        .expect(HttpStatus.OK);
    });

    it("should return 5 users and their posts with limit=5&sortBy=posts.id:ASC parameters", () => {
      return request(app.getHttpServer())
        .get("/users?limit=5&sortBy=posts.id:ASC")
        .set("Accept", "application/json")
        .expect((response: request.Response) => {
          const { data } = response.body;
          expect(data).toHaveLength(5)
          // failed:
          // Expected length: 5
          // Received length: 3
          // Received array:  [{"age": 3, "firstName": "User2", "id": 15, "lastName": "u2", "posts": [{"description": "Post4 zz", "id": 1, "postReplys": [], "title": "Post1 Title"}, {"description": "Post3 fff", "id": 10, "postReplys": [{"title": "bbb"}], "title": "Post3 Title"}]}, {"age": 1, "firstName": "User1", "id": 14, "lastName": "u1", "posts": [{"description": "Post1 bbb", "id": 8, "postReplys": [{"title": "aaa"}], "title": "Post1 Title"}, {"description": "Post2 zzz", "id": 9, "postReplys": [{"title": "nnn"}], "title": "Post2 Title"}]}, {"age": 5, "firstName": "User3", "id": 16, "lastName": "u3", "posts": [{"description": "", "id": 11, "postReplys": [{"title": "fff"}], "title": "Post4"}]}]
        })
        .expect(HttpStatus.OK);
    });
  });
});
