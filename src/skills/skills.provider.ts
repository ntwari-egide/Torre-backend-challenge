/**
 * @author: ntwari egide
 * @description: skill provider implementation
 */

import { Connection } from "mongoose";
import { SkillSchema } from "./entities/skill.entity";

 export const skillsProvider = [
    {
      provide: 'SKILL_MODEL',
      useFactory: (connection: Connection) => connection.model('Skill', SkillSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
