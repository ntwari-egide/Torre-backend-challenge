import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostTypeNotFoundException } from 'src/exceptions/PostTypeNotFoundException';
import { CreatePostTypeDto } from './dto/create-post-type.dto';
import { UpdatePostTypeDto } from './dto/update-post-type.dto';
import { PostType } from './post-type.interface';

@Injectable()
export class PostTypeService {

  constructor(
    @Inject('POST_TYPE_MODEL')
    private postTypeModel: Model<PostType>
  ){}

  private readonly logger = new Logger(PostTypeService.name)

  async create(createPostTypeDto: CreatePostTypeDto): Promise<PostType> {

    let newPostType = new this.postTypeModel(createPostTypeDto)

    return newPostType.save()
  }

  async findAll(): Promise<PostType[]> {
    return this.postTypeModel.find().exec()
  }

  checkPostTypeExistance = (id): PostType => {

    let postType : any
    
    try {

      postType = this.postTypeModel.findById(id).exec()

      this.logger.log('Getting Post type with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting post type with id: '+id+" has failed")

      throw new PostTypeNotFoundException('Post type with id '+id+ ' is not found')

    }

    return postType

  }

  async findOne(id: String): Promise<PostType> {

    return this.checkPostTypeExistance(id)

  }

  async update(id: String, updatePostTypeDto: UpdatePostTypeDto): Promise<PostType> {

    this.checkPostTypeExistance(id)

    this.logger.log('Updating post type with id : '+id)

    return this.postTypeModel.findByIdAndUpdate(id, updatePostTypeDto).exec()
  
  }

  remove(id: String) {

    this.checkPostTypeExistance(id)

    return this.postTypeModel.findByIdAndRemove(id).exec()
  
  }
}
