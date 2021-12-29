import { Module } from '@nestjs/common';
import { CommentRepliesService } from './comment-replies.service';
import { CommentRepliesController } from './comment-replies.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { commentRepliesProvider } from './comment-replies.provide';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 200
    })
  ],
  controllers: [CommentRepliesController],
  providers: [
    CommentRepliesService,
    ...commentRepliesProvider
  ]
})
export class CommentRepliesModule {}
