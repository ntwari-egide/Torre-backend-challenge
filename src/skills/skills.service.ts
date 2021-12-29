/**
 * @author: ntwari egide
 * @description: skill service
 */

import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { SkillsNotFoundException } from 'src/exceptions/SkillNotFoundException';
import { SkillsTypeNotFoundException } from 'src/exceptions/SkillTypeNotFoundException';
import { SkillsType } from 'src/skill-types/skill-type.interface';
import { CreateSkillsDto } from './dto/create-skill.dto';
import { UpdateSkillsDto } from './dto/update-skill.dto';
import { Skills } from './skill.interface';

@Injectable()
export class SkillsService {

  constructor(  
    @Inject('SKILL_MODEL')
    private skillsModel: Model<Skills>,

    @Inject('SKILLS_TYPE_MODEL')
    private skillsTypeModel: Model<SkillsType>

  ){}

  private readonly logger = new Logger(SkillsService.name)


  create(createSkill: CreateSkillsDto) {

    let createSkills = new this.skillsModel(createSkill)

    let type : any
    try {
      type = this.skillsTypeModel.findById(createSkill.skillTypeId).exec()

      this.logger.log('Getting skills type with id : '+createSkill.skillTypeId)
      
    } catch (error) {

      this.logger.log('Getting skills type with id: '+createSkill.skillTypeId+" has failed")

      throw new SkillsTypeNotFoundException('skill type with id '+createSkill.skillTypeId+ ' is not found')

    }

    createSkills.skillType = type

    
    return createSkills.save()
  }

  async findAll(): Promise<Skills[]> {

    this.logger.log('Getting list of all skills')

    return this.skillsModel.find().exec()

  }

  checkUserExistance = (id: String) : Skills => {
    let type : any
    try {
      type = this.skillsModel.findById(id).exec()

      this.logger.log('Getting skills type with id : '+id)
      
    } catch (error) {

      this.logger.log('Getting skills with id: '+id+" has failed")

      throw new SkillsNotFoundException('skill with id '+id+ ' is not found')

    }

    return type
  }

  async findOne(id: String): Promise<Skills> {

    return this.checkUserExistance(id)

  }

  async update(id: String, updates: UpdateSkillsDto): Promise<Skills> {
    
    this.checkUserExistance(id)

    this.logger.log('Updating skill with id : '+id)

    let createSkills = new this.skillsModel(updates)

    let type : any
    try {
      type = this.skillsTypeModel.findById(updates.skillTypeId).exec()

      this.logger.log('Getting skills type with id : '+updates.skillTypeId)
      
    } catch (error) {

      this.logger.log('Getting skills type with id: '+updates.skillTypeId+" has failed")

      throw new SkillsTypeNotFoundException('skill type with id '+updates.skillTypeId+ ' is not found')

    }

    return this.skillsModel.findByIdAndUpdate(id,updates).exec()

  }

  async remove(id: String) {
    
    this.checkUserExistance(id)

    this.logger.log('Deleting skill with id : '+id)

    return this.skillsModel.findByIdAndRemove(id).exec()

  }

  async findBySkillTyp (skillTypeId: String): Promise<Skills[]> {
    let type : any
    try {
      type = this.skillsTypeModel.findById(skillTypeId).exec()

      this.logger.log('Getting skills type with id : '+skillTypeId)
      
    } catch (error) {

      this.logger.log('Getting skills type with id: '+skillTypeId+" has failed")

      throw new SkillsTypeNotFoundException('skill type with id '+skillTypeId+ ' is not found')

    }


    return this.skillsModel.find({skillType: type })
  }
}