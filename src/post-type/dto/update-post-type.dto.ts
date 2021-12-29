/**
 * @author: ntwari egide
 * @description: Update post types dto
 */

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostTypeDto } from './create-post-type.dto';

export class UpdatePostTypeDto extends PartialType(CreatePostTypeDto) {

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
