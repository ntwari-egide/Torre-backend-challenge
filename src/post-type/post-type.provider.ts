/**
 * @author: ntwari egide
 * @description: User provider implementation
 */

 import { Connection } from "mongoose";
import { PostTypeSchema } from "./entities/post-type.entity";
 
  export const postTypeProvider = [
     {
       provide: 'POST_TYPE_MODEL',
       useFactory: (connection: Connection) => connection.model('Post-type', PostTypeSchema),
       inject: ['DATABASE_CONNECTION'],
     },
   ];
 