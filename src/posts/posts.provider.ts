/**
 * @author: ntwari egide
 * @description: Post provider implementation
 */

 import { Connection } from "mongoose";
import { PostSchema } from "./entities/post.entity";
 
  export const postsProvider = [
     {
       provide: 'POST_MODEL',
       useFactory: (connection: Connection) => connection.model('Posts', PostSchema),
       inject: ['DATABASE_CONNECTION'],
     },
   ];
 