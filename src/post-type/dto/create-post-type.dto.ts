/**
 * @author: ntwari egide
 * @description: create user dto
 */

import { ApiProperty } from "@nestjs/swagger"


export class CreatePostTypeDto {

    @ApiProperty({
        // default: "post-name",
        description: "Post type name",
        type: String
    })
    name: String

    
    @ApiProperty({
        // default: "http:iconimage/example",
        description: "Post type icon image url",
        type: String
    })
    iconImage: String

    
    @ApiProperty({
        // default: Date,
        description: "Post type creation date",
        type: Date
    })
    createdAt: Date

    
    @ApiProperty({
        // default: Date,
        description: "Last updates are mode on",
        type: Date
    })
    updatedAt: Date

}
