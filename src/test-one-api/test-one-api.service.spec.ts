import { Test, TestingModule } from '@nestjs/testing';
import { TestOneApiService } from './test-one-api.service';

describe('TestOneApiService', () => {
  let service: TestOneApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestOneApiService],
    }).compile();

    service = module.get<TestOneApiService>(TestOneApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
