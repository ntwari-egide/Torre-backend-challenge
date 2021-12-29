/**
 * @author: ntwari egide
 * @description: Comment replies interface implementation
 */

 import { Document } from 'mongoose';

export interface CommentReply extends Document {

    id: String,

    commentId: String,

    replyMessage: String,

    repliedAt: Date,

    repliedBy: String

}
