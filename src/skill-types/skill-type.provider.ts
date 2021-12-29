/**
 * @author: ntwari egide
 * @description: skills provider implementation
 */

import { Connection } from "mongoose";
import { SkillsTypeSchema } from "./entities/skill-type.entity";

 export const skillsTypesProvovider = [
    {
      provide: 'SKILLS_TYPE_MODEL',
      useFactory: (connection: Connection) => connection.model('Skills_types', SkillsTypeSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ];
