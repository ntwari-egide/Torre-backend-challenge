/**
 * @author: ntwari egide
 * @description: Post schema implementation
 */


 import * as mongoose from 'mongoose';

 export const PostSchema = new mongoose.Schema({

    id: String,

    postTypes : [String] ,

    coverImageUrl: String,

    postTitle: String,

    postDescription: String,

    contentMdFileUrl: String,

    githubLinkUrl: String,

    totalForks: Number,

    totalLikes: Number,

    totalViews: Number,

    PostedBy: String,

    createdAt: Date,

    updatedAt: Date


 })


