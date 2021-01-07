import { Test, TestingModule } from '@nestjs/testing';
import { NoPropertyController } from './no-property.controller';

describe('NoPropertyController', () => {
  let controller: NoPropertyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoPropertyController],
    }).compile();

    controller = module.get<NoPropertyController>(NoPropertyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
