/**
 * @author: ntwari egide
 * @description: User modal implementation
 */


 import * as mongoose from 'mongoose';

 export const SkillsTypeSchema = new mongoose.Schema({
 
   name: String,

   desription: String,

   createdAt: Date
 
 });