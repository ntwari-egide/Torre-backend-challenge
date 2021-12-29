/**
 * @author: ntwari egide
 * @description: skill modal implementation
 */


 import * as mongoose from 'mongoose';
import { SkillsTypeSchema } from 'src/skill-types/entities/skill-type.entity';

 export const SkillSchema = new mongoose.Schema({
 
   skillType: SkillsTypeSchema,
 
   skillName: String,
 
   skillDescription: String,
 
   createdAt: Date
 
 });