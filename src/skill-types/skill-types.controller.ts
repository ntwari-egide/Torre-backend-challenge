/**
 * @author: ntwari egide
 * @description: skills type endpoints controller
 */

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillTypesService } from './skill-types.service';
import { CreateSkillTypeDto } from './dto/create-skill-type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill-type.dto';

@Controller('skill-types')
export class SkillTypesController {
  constructor(private readonly skillTypesService: SkillTypesService) {}

  @Post()
  create(@Body() createSkillTypeDto: CreateSkillTypeDto) {
    return this.skillTypesService.create(createSkillTypeDto);
  }

  @Get()
  findAll() {
    return this.skillTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillTypesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillTypeDto: UpdateSkillTypeDto) {
    return this.skillTypesService.update(id, updateSkillTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillTypesService.remove(id);
  }
}
