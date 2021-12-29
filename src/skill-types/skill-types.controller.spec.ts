import { Test, TestingModule } from '@nestjs/testing';
import { SkillTypesController } from './skill-types.controller';
import { SkillTypesService } from './skill-types.service';

describe('SkillTypesController', () => {
  let controller: SkillTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillTypesController],
      providers: [SkillTypesService],
    }).compile();

    controller = module.get<SkillTypesController>(SkillTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
