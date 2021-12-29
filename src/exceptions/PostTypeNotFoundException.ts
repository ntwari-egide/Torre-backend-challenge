/**
 * @author: ntwari egide
 * @description: Post type not found exception handler implementation
 */

import { HttpException, HttpStatus } from "@nestjs/common";

export class PostTypeNotFoundException extends HttpException{
    constructor(message: String){
        super({
            status: HttpStatus.NOT_FOUND,
            error: message
        },HttpStatus.NOT_FOUND)
    }
}