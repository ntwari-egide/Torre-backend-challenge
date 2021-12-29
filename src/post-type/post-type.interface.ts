/**
 * @author: ntwari egide
 * @description: Post type interface implementation
 */


 import { Document } from 'mongoose';

 export interface PostType extends Document {

    id: String,

    name: String,

    iconImage: String,

    createdAt: Date,

    updatedAt: Date

 }