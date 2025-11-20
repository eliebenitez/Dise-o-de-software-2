import { Test, TestingModule } from '@nestjs/testing';
import { IntentoevaluacionController } from './intentoevaluacion.controller';
import { IntentoevaluacionService } from './intentoevaluacion.service';

describe('IntentoevaluacionController', () => {
  let controller: IntentoevaluacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntentoevaluacionController],
      providers: [IntentoevaluacionService],
    }).compile();

    controller = module.get<IntentoevaluacionController>(IntentoevaluacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
