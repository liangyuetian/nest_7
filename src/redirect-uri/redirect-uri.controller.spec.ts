import { Test, TestingModule } from '@nestjs/testing';
import { RedirectUriController } from './redirect-uri.controller';

describe('RedirectUriController', () => {
  let controller: RedirectUriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedirectUriController],
    }).compile();

    controller = module.get<RedirectUriController>(RedirectUriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
