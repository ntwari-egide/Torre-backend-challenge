/**
 * @author: ntwari egide
 * @description: Comments service implementation
 */


import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { CommentNotFoundException } from 'src/exceptions/CommentNotFoundException';
import { User } from 'src/user/user.interface';
import { Comment } from './comments.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {

  constructor(  
    @Inject('COMMENT_MODEL')
    private commentModal: Model<Comment>,

    @Inject("USER_MODEL")
    private userModal: Model<User>
  ){}

  private readonly logger = new Logger(CommentsService.name)


  async create(createCommentDto: CreateCommentDto) : Promise<Comment> {

    let newComment = new this.commentModal(createCommentDto)


    let commentedBy = await this.userModal.findById(createCommentDto.commentedBy)
    .exec()

    newComment.commentedBy = commentedBy

    return newComment.save()

  }

  async getCommentsByPost(postId: String): Promise<Comment[]> {

    return await this.commentModal.find({ postId: postId}).exec()

  }

  async findAll(): Promise<Comment[]> {

    this.logger.log('Getting List of all comments')

    return this.commentModal.find().exec()
  
  }

  checkCommentExistance = (id: String) : Comment => {
    let comment : any
    try {
      comment = this.commentModal.findById(id).exec()

      this.logger.log('Getting user with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting user with id: '+id+" has failed")

      throw new CommentNotFoundException('User with id '+id+ ' is not found')

    }

    return comment

  }

  async findOne(id: String): Promise<Comment> {

    return this.checkCommentExistance(id)

  }

  async update(id: String, updateCommentDto: UpdateCommentDto): Promise<Comment> {

    this.checkCommentExistance(id)
    
    this.logger.log('Updating a comment with id : '+id)

    return this.commentModal.findByIdAndUpdate(id, updateCommentDto)

  }

  remove(id: String) {

    this.checkCommentExistance(id)

    this.logger.log('Deleting comment with id : '+id)

    return  this.commentModal.findByIdAndRemove(id).exec()
    
  }
}
