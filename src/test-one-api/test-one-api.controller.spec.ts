import { Test, TestingModule } from '@nestjs/testing';
import { TestOneApiController } from './test-one-api.controller';

describe('TestOneApiController', () => {
  let controller: TestOneApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestOneApiController],
    }).compile();

    controller = module.get<TestOneApiController>(TestOneApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
