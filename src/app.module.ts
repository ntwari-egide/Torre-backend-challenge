/**
 * @author: ntwari egide
 * @description: main application module
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { SkillTypesModule } from './skill-types/skill-types.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [ UserModule,DatabaseModule, SkillTypesModule, SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
