/**
 * @author: ntwari egide
 * @description: Post service implementation service
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostNotFoundException } from 'src/exceptions/PostNotFoundException';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './posts.interface';

@Injectable()
export class PostsService {

  constructor(  
    @Inject('POST_MODEL')
    private postModel: Model<Post>
  ){}

  private readonly logger = new Logger(PostsService.name)

  async create(createPostDto: CreatePostDto): Promise<Post> {

    let createPost = new this.postModel(createPostDto)

    this.logger.log('Saving new post in the database...')

    return createPost.save();
  }

  async likingPostAction(postId: String) : Promise<Post>{

    let foundPost = await this.postModel.findById(postId).exec()

    let updates = {
      totalLikes: foundPost.totalLikes  + 1
    }

    return this.postModel.findOneAndUpdate(postId, updates)
  
  }

  async viewingPostAction(postId: String) : Promise<Post>{

    let foundPost = await this.postModel.findById(postId).exec()

    let updates = {
      totalViews: foundPost.totalViews  + 1
    }

    return this.postModel.findOneAndUpdate(postId, updates)
  
  }


  async getbycontentmdname(contentmdname: String): Promise<Post[]>{
    
    let foundPosts = this.postModel.find({
      contentMdFileUrl:contentmdname
    }).exec()

    return foundPosts

  }


  async findByPostId(postTypeId: String): Promise<Post[]> {

      return this.postModel.find({
        postTypes: postTypeId
      }).exec()

  }

  async findAll(): Promise<Post[]> {

    this.logger.log('Getting list of all posts')

    return this.postModel.find().exec()
  
  }

  async searchPostByKeyword (searchKeyWord: String) : Promise<Post[]> {

    let postsFound = await this.postModel.find(
      {
        $or: [
          {
            postTitle: new RegExp(<string> searchKeyWord, "ig")
          },
          {
            postDescription: new RegExp(<string> searchKeyWord, "ig")
          },
          {
            contentMdFileUrl: new RegExp(<string> searchKeyWord, "ig")
          }
        ]
      }
    ).exec()
    

    return postsFound

  }

  /**
   * Checks the existance of the post in the database
   * @param id 
   * @returns Post type
   */

  checkPostExistance = (id: String) : Post => {
    let post : any
    try {
      post = this.postModel.findById(id).exec()

      this.logger.log('Getting post with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting Post with id: '+id+" has failed")

      throw new PostNotFoundException('Post with id '+id+ ' is not found')

    }

    return post
  }

  /**
   * @description: finding the post by id by checking the existance in the database
   * @param id 
   * @returns Post
   */

  async findOne(id: String): Promise<Post> {
    return this.checkPostExistance(id)
  }


  /**
   * @description: updating the existing post using its id
   * @param id 
   * @param updatePostDto 
   * @returns Updated post
   */
  async update(id: String, updatePostDto: UpdatePostDto): Promise<Post> {

    this.checkPostExistance(id)

    this.logger.log('Updating post with id : '+id)

    return this.postModel.findByIdAndUpdate(id, updatePostDto).exec()
  }

  remove(id: String) {

    this.checkPostExistance(id)

    this.logger.log('Deletig a post with id : '+id)

    return this.postModel.findByIdAndRemove(id)
  }
}
