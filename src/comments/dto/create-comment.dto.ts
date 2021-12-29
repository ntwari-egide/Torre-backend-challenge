/**
 * @author: ntwari egide
 * @description: Add comment dto
 */

import { ApiProperty } from "@nestjs/swagger"

export class CreateCommentDto {

    @ApiProperty({
        description: "Post id string",
        type: String
    })
    postId: String

    
    @ApiProperty({
        description: "Comment message content",
        type: String
    })
    commentMessage: String

    @ApiProperty({
        description: "Number of likes",
        default: 0,
        type: Number
    })
    numberOfLikes: Number

    @ApiProperty({
        description: "Commented at date",
        type: Date
    })
    commentedAt: Date

    @ApiProperty({
        description: "Id string of the commenter",
        type: String
    })
    commentedBy: String

}
