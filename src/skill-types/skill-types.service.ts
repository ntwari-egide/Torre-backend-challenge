/**
 * @author: ntwari egide
 * @description: skills type service implementation
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { SkillsTypeNotFoundException } from 'src/exceptions/SkillTypeNotFoundException';
import { CreateSkillTypeDto } from './dto/create-skill-type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill-type.dto';
import { SkillsType } from './skill-type.interface';

@Injectable()
export class SkillTypesService {
  constructor(  
    @Inject('SKILLS_TYPE_MODEL')
    private skillsTypeModel: Model<SkillsType>
  ){}

  private readonly logger = new Logger(SkillTypesService.name)


  create(createSkillTypeDto: CreateSkillTypeDto) {

    let createSkillType = new this.skillsTypeModel(createSkillTypeDto)
    
    return createSkillType.save()
  }

  async findAll(): Promise<SkillsType[]> {

    this.logger.log('Getting list of all skills types')

    return this.skillsTypeModel.find().exec()

  }

  checkUserExistance = (id: String) : SkillsType => {
    let type : any
    try {
      type = this.skillsTypeModel.findById(id).exec()

      this.logger.log('Getting skills type with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting skills type with id: '+id+" has failed")

      throw new SkillsTypeNotFoundException('skill type with id '+id+ ' is not found')

    }

    return type
  }

  async findOne(id: String): Promise<SkillsType> {

    return this.checkUserExistance(id)

  }

  async update(id: String, updates: UpdateSkillTypeDto): Promise<SkillsType> {
    
    this.checkUserExistance(id)

    this.logger.log('Updating skill type with id : '+id)

    return this.skillsTypeModel.findByIdAndUpdate(id,updates).exec()

  }

  async remove(id: String) {
    
    this.checkUserExistance(id)

    this.logger.log('Deleting skill type with id : '+id)

    return this.skillsTypeModel.findByIdAndRemove(id).exec()

  }
}
