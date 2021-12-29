/**
 * @author: ntwari egide
 * @description: Create post dto
 */

import { ApiProperty } from "@nestjs/swagger"

export class CreatePostDto {

    @ApiProperty({
        description: "Post type ids string",
        type: [String]
    })
    postTypes : [String] 

    @ApiProperty({
        description: "Post cover image url string",
        type: String
    })
    coverImageUrl: String

    @ApiProperty({
        description: "Post title string",
        type: String
    })
    postTitle: String

    @ApiProperty({
        description: "Post description string",
        type: String
    })
    postDescription: String

    @ApiProperty({
        description: "Post content md slug name/url",
        type: String
    })
    contentMdFileUrl: String

    @ApiProperty({
        description: "Github link",
        type: String
    })
    githubLinkUrl: String

    @ApiProperty({
        description: "Number of forks",
        type: Number
    })
    totalForks: number

    @ApiProperty({
        description: "Number of likes",
        type: Number
    })
    totalLikes: number

    @ApiProperty({
        description: "Number of views",
        type: Number
    })
    totalViews: number

    @ApiProperty({
        description: "Posted by string",
        type:  String
    })
    PostedBy: String

    @ApiProperty({
        description: "Date of creation",
        type: Date
    })
    createdAt: Date

    @ApiProperty({
        description: "Date of latest updates",
        type: Date
    })
    updatedAt: Date

}
