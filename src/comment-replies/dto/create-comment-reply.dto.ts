/**
 * @author: ntwari egide
 * @description: create comment dto
 */

import { ApiProperty } from "@nestjs/swagger"

export class CreateCommentReplyDto {

    
    @ApiProperty({
        description: "Comment Ids",
        type: String
    })
    commentId: String


    @ApiProperty({
        description: "Comment reply message content",
        type: String
    })
    replyMessage: String


    @ApiProperty({
        description: "Replied at",
        type: Date
    })
    repliedAt: Date


    @ApiProperty({
        description: "Replied by",
        type: String
    })
    repliedBy: String

}