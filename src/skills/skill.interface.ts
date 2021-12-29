/**
 * @author: ntwari egide
 * @description: skills interface implementation
 */


 import { Document } from 'mongoose';
import { SkillsType } from 'src/skill-types/skill-type.interface';

 export interface Skills extends Document {

 
    skillType: SkillsType,
 
    skillName: String,
  
    skillDescription: String,
  
    createdAt: Date
 }