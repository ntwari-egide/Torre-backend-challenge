/**
 * @author: ntwari egide
 * @description: posts controller endpoints handler
 */


import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('api/v1/posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get("/contentmdfileurl/:contentmdname")
  findByContentMd( @Param('contentmdname') contentmdname: String ) {

    return this.postsService.getbycontentmdname(contentmdname)

  }

  /**
   * 
   * @param searchkeyword 
   * @returns post []
   */

  @Get('/search/:searchkeyword')
  search( @Param('searchkeyword') searchkeyword: String ) {

    return this.postsService.searchPostByKeyword(searchkeyword)

  }

  @Get("/add-new-like/:postId")
  addNewLikeActionHandler ( @Param('postId') postId: String) {
    return this.postsService.likingPostAction(postId)
  }

  
  @Get("/add-new-view/:postId")
  addViewLikeActionHandler ( @Param('postId') postId: String) {
    return this.postsService.viewingPostAction(postId)
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Get("/post-type/:postTypeId")
  findByPostType (@Param("postTypeId") postTypeId: String) {

    return this.postsService.findByPostId(postTypeId)

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
