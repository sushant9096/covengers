import { Test, TestingModule } from '@nestjs/testing';
import { MedicalStoreService } from './medical-store.service';

describe('MedicalStoreService', () => {
  let service: MedicalStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalStoreService],
    }).compile();

    service = module.get<MedicalStoreService>(MedicalStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
