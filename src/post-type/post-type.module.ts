

import { Module } from '@nestjs/common';
import { PostTypeService } from './post-type.service';
import { PostTypeController } from './post-type.controller';
import { postTypeProvider } from './post-type.provider';
import { DatabaseModule } from 'src/database/database.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 200
    })
  ],
  controllers: [PostTypeController],
  providers: [
    PostTypeService,
    ...postTypeProvider
  ]
})
export class PostTypeModule {}
