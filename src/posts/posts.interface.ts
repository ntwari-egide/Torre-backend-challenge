/**
 * @author: ntwari egide
 * @description: Post interface implementation
 */


 import { Document } from 'mongoose';

 export interface Post extends Document {

    postTypes : [String] ,

    coverImageUrl: String,

    postTitle: String| RegExp,

    postDescription: String | RegExp,

    contentMdFileUrl: String| RegExp,

    githubLinkUrl: String,

    totalForks: number,

    totalLikes: number,

    totalViews: number,

    PostedBy: String,

    createdAt: Date,

    updatedAt: Date
    
 }


 export class PostDetails {

   postDetails: Post

   comments: [Comment]
   
}