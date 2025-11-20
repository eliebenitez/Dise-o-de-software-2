import { Test, TestingModule } from '@nestjs/testing';
import { RetroalimentacionService } from './retroalimentacion.service';

describe('RetroalimentacionService', () => {
  let service: RetroalimentacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetroalimentacionService],
    }).compile();

    service = module.get<RetroalimentacionService>(RetroalimentacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
