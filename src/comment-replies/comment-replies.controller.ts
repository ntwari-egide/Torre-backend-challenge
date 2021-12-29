/**
 * @author: ntwari egide
 * @description: comment replies controller endpoints handler
 */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentRepliesService } from './comment-replies.service';
import { CreateCommentReplyDto } from './dto/create-comment-reply.dto';
import { UpdateCommentReplyDto } from './dto/update-comment-reply.dto';

@Controller('api/v1/comment-replies')
export class CommentRepliesController {
  constructor(private readonly commentRepliesService: CommentRepliesService) {}

  @Post()
  create(@Body() createCommentReplyDto: CreateCommentReplyDto) {
    return this.commentRepliesService.create(createCommentReplyDto);
  }

  @Get()
  findAll() {
    return this.commentRepliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentRepliesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentReplyDto: UpdateCommentReplyDto) {
    return this.commentRepliesService.update(id, updateCommentReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentRepliesService.remove(id);
  }
}
