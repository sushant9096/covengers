import { Test, TestingModule } from '@nestjs/testing';
import { MedicalStoreController } from './medical-store.controller';
import { MedicalStoreService } from './medical-store.service';

describe('MedicalStoreController', () => {
  let controller: MedicalStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalStoreController],
      providers: [MedicalStoreService],
    }).compile();

    controller = module.get<MedicalStoreController>(MedicalStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
