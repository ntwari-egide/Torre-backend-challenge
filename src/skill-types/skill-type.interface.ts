/**
 * @author: ntwari egide
 * @description: skills type interface implementation
 */


 import { Document } from 'mongoose';

 export interface SkillsType extends Document {

    name: String,

    desription: String,
 
    createdAt: Date
 }