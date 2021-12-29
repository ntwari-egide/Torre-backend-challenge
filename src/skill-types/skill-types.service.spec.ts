import { Test, TestingModule } from '@nestjs/testing';
import { SkillTypesService } from './skill-types.service';

describe('SkillTypesService', () => {
  let service: SkillTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillTypesService],
    }).compile();

    service = module.get<SkillTypesService>(SkillTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
