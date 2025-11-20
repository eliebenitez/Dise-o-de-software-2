import { Test, TestingModule } from '@nestjs/testing';
import { RetroalimentacionController } from './retroalimentacion.controller';

describe('RetroalimentacionController', () => {
  let controller: RetroalimentacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetroalimentacionController],
    }).compile();

    controller = module.get<RetroalimentacionController>(RetroalimentacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
