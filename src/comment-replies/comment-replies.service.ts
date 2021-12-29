/**
 * @author: ntwari egide
 * @description: Comment replies service implementation
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentReplyNotFoundException } from 'src/exceptions/CommentReplyNotFoundException';
import { CommentReply } from './comment-replies.interface';
import { CreateCommentReplyDto } from './dto/create-comment-reply.dto';
import { UpdateCommentReplyDto } from './dto/update-comment-reply.dto';

@Injectable()
export class CommentRepliesService {

  constructor(  
    @Inject('COMMENT_REPLY_MODEL')
    private commentRepliesModal: Model<CommentReply>
  ){}

  private readonly logger = new Logger(CommentRepliesService.name)

  async create(createCommentReplyDto: CreateCommentReplyDto): Promise<CommentReply> {
    
    let commentReply = new this.commentRepliesModal(createCommentReplyDto)

    this.logger.log('Saving new comment reply in database')

    return commentReply.save()

  }

  async findAll() : Promise<CommentReply[]> {
    
    this.logger.log('Getting list of all comment replies')

    return this.commentRepliesModal.find().exec()

  }

  checkCommentReplyExistance = (id: String) : CommentReply => {

    let reply : any
    
    try {
    
      reply = this.commentRepliesModal.findById(id).exec()

      this.logger.log('Getting comment reply with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting comment reply with id: '+id+" has failed")

      throw new CommentReplyNotFoundException('Comment reply with id '+id+ ' is not found')

    }

    return reply
  }

  async findOne(id: String): Promise<CommentReply> {

    return this.checkCommentReplyExistance(id)
  
  }


  async update(id: String, updateCommentReplyDto: UpdateCommentReplyDto) : Promise<CommentReply> {

    this.checkCommentReplyExistance(id)

    this.logger.log('Updating comment reply with id : '+id)

    return this.commentRepliesModal.findByIdAndUpdate(id)

  }

  async remove(id: String) {

    this.checkCommentReplyExistance(id)

    this.logger.log('Deleting comment replies with id : '+id)

    return this.commentRepliesModal.findByIdAndRemove(id)

  }
}
