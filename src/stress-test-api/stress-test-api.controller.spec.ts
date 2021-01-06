import { Test, TestingModule } from '@nestjs/testing';
import { StressTestApiController } from './stress-test-api.controller';

describe('StressTestApiController', () => {
  let controller: StressTestApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StressTestApiController],
    }).compile();

    controller = module.get<StressTestApiController>(StressTestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
