/**
 * @author: ntwari egide
 * @description: Comments interface implementation
 */

 import { Document } from 'mongoose';

export interface Comment extends Document {

    id: String,

    postId: String,

    commentMessage: String,

    numberOfLikes: Number,

    commentedAt: Date,

    commentedBy: any,

    replies: [any]

}
