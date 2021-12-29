/**
 * @author: ntwari egide
 * @description: Comment modal implementation
 */
 import * as mongoose from 'mongoose';
import { UserSchema } from '../../user/entities/user.entity';

export const CommentSchema = new mongoose.Schema ({

    id: String,

    postId: String,

    commentMessage: String,

    numberOfLikes: Number,

    commentedAt: Date,

    commentedBy: [UserSchema]

})
