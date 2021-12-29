import { PartialType } from '@nestjs/swagger';
import { CreateSkillTypeDto } from './create-skill-type.dto';

export class UpdateSkillTypeDto extends PartialType(CreateSkillTypeDto) {}
