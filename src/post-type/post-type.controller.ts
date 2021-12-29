/**
 * @author: ntwari egide
 * @description: Post type controller implementation
 */


import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostTypeService } from './post-type.service';
import { CreatePostTypeDto } from './dto/create-post-type.dto';
import { UpdatePostTypeDto } from './dto/update-post-type.dto';

@Controller('/api/v1/post-types')
export class PostTypeController {
  constructor(private readonly postTypeService: PostTypeService) {}

  @Post()
  create(@Body() createPostTypeDto: CreatePostTypeDto) {
    return this.postTypeService.create(createPostTypeDto);
  }

  @Get()
  findAll() {
    return this.postTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postTypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostTypeDto: UpdatePostTypeDto) {
    return this.postTypeService.update(id, updatePostTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postTypeService.remove(id);
  }
}
