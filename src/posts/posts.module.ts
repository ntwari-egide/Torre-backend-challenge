/**
 * @author: ntwari egide
 * @description: posts module implementation
 */


import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProvider } from './posts.provider';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 200
    })
  ],
  controllers: [
    PostsController
  ],
  providers: [
    PostsService,
    ...postsProvider
  ]
})
export class PostsModule {}
