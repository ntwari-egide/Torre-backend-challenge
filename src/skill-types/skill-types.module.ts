/**
 * @author: ntwari egide
 * @description: skills type module implementation
 */

import { Module } from '@nestjs/common';
import { SkillTypesService } from './skill-types.service';
import { SkillTypesController } from './skill-types.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { skillsTypesProvovider } from './skill-type.provider';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
    ttl: 60,
    limit: 200,
  }),],
  controllers: [SkillTypesController],
  providers: [
    SkillTypesService,
    ...skillsTypesProvovider
  ],
})
export class SkillTypesModule {}
