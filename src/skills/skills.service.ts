import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { SkillsNotFoundException } from 'src/exceptions/SkillNotFoundException';
import { CreateSkillsDto } from './dto/create-skill.dto';
import { UpdateSkillsDto } from './dto/update-skill.dto';
import { Skills } from './skill.interface';

@Injectable()
export class SkillsService {

  constructor(  
    @Inject('SKILL_MODEL')
    private skillsModel: Model<Skills>
  ){}

  private readonly logger = new Logger(SkillsService.name)


  create(createSkill: CreateSkillsDto) {

    let createSkillType = new this.skillsModel(createSkill)
    
    return createSkillType.save()
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

    return this.skillsModel.findByIdAndUpdate(id,updates).exec()

  }

  async remove(id: String) {
    
    this.checkUserExistance(id)

    this.logger.log('Deleting skill with id : '+id)

    return this.skillsModel.findByIdAndRemove(id).exec()

  }
}
