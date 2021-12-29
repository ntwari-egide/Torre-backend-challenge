/**
 * @author: ntwari egide
 * @description: Post comment reply not found exception handler implementation
 */

 import { HttpException, HttpStatus } from "@nestjs/common";

 export class CommentReplyNotFoundException extends HttpException{
     constructor(message: String){
         super({
             status: HttpStatus.NOT_FOUND,
             error: message
         },HttpStatus.NOT_FOUND)
     }
 }