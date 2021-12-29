import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSkillTypeDto } from './dto/create-skill-type.dto';
import { UpdateSkillTypeDto } from './dto/update-skill-type.dto';

@Injectable()
export class SkillTypesService {
  constructor(  
    @Inject('SKILLS_TYPE_MODEL')
    private userModal: Model<User>
  ){}


  create(createSkillTypeDto: CreateSkillTypeDto) {
    return 'This action adds a new skillType';
  }

  findAll() {
    return `This action returns all skillTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skillType`;
  }

  update(id: number, updateSkillTypeDto: UpdateSkillTypeDto) {
    return `This action updates a #${id} skillType`;
  }

  remove(id: number) {
    return `This action removes a #${id} skillType`;
  }
}
