import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { skillsProvider } from './skills.provider';
import { skillsTypesProvovider } from 'src/skill-types/skill-type.provider';

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot({
    ttl: 60,
    limit: 200,
  }),],
  controllers: [SkillsController],
  providers: [
    SkillsService,
    ...skillsProvider,
    ...skillsTypesProvovider
  ]
})
export class SkillsModule {}
