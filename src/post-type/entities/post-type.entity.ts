/**
 * @author: ntwari egide
 * @description: Post types schema implementation
 */


import * as mongoose from 'mongoose';

export const PostTypeSchema = new mongoose.Schema({

    id: String,

    name: String,

    iconImage: String,

    createdAt: Date,

    updatedAt: Date

})
