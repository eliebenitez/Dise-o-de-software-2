import { Test, TestingModule } from '@nestjs/testing';
import { IntentoevaluacionService } from './intentoevaluacion.service';

describe('IntentoevaluacionService', () => {
  let service: IntentoevaluacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntentoevaluacionService],
    }).compile();

    service = module.get<IntentoevaluacionService>(IntentoevaluacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
