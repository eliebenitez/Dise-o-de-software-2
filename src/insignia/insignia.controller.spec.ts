import { Test, TestingModule } from '@nestjs/testing';
import { InsigniaController } from './insignia.controller';
import { InsigniaService } from './insignia.service';

describe('InsigniaController', () => {
  let controller: InsigniaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsigniaController],
      providers: [InsigniaService],
    }).compile();

    controller = module.get<InsigniaController>(InsigniaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
