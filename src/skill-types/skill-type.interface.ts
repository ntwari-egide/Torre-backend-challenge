/**
 * @author: ntwari egide
 * @description: skills type interface implementation
 */


 import { Document } from 'mongoose';

 export interface User extends Document {
    name: String,

    desription: String,
 
    createdAt: Date
 }