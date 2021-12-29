import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCommentReplyDto } from './create-comment-reply.dto';

export class UpdateCommentReplyDto extends PartialType(CreateCommentReplyDto) {

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
