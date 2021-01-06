import { Test, TestingModule } from '@nestjs/testing';
import { StressTestApiService } from './stress-test-api.service';

describe('StressTestApiService', () => {
  let service: StressTestApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StressTestApiService],
    }).compile();

    service = module.get<StressTestApiService>(StressTestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
