import { Test, TestingModule } from '@nestjs/testing';
import { InsigniaService } from './insignia.service';

describe('InsigniaService', () => {
  let service: InsigniaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsigniaService],
    }).compile();

    service = module.get<InsigniaService>(InsigniaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
