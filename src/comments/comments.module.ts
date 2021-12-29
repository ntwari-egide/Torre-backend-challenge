/**
 * @author: ntwari egide
 * @description: Comments module implementation
 */


import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { commentsProvider } from './comments.provider';
import { usersProvider } from 'src/user/user.provider';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 200
    })
  ],
  controllers: [CommentsController],
  providers: [
    CommentsService,
    ...commentsProvider,
    ...usersProvider
  ]
})
export class CommentsModule {}
