/**
 * @author: ntwari egide
 * @description: Comment replies provider implementation
 */

 import { Connection } from "mongoose";
import { CommentReplySchema } from "./entities/comment-reply.entity";
  
  export const commentRepliesProvider = [
     {
       provide: 'COMMENT_REPLY_MODEL',
       useFactory: (connection: Connection) => connection.model('CommentReplies', CommentReplySchema),
       inject: ['DATABASE_CONNECTION'],
     },
   ];
 