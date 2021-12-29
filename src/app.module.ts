/**
 * @author: ntwari egide
 * @description: main application module
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { PostTypeModule } from './post-type/post-type.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { CommentRepliesModule } from './comment-replies/comment-replies.module';

@Module({
  imports: [ UserModule,PostTypeModule,PostsModule,CommentsModule, CommentRepliesModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
