import { Module } from '@nestjs/common';
import { MedicalStoreService } from './medical-store.service';
import { MedicalStoreController } from './medical-store.controller';

@Module({
  controllers: [MedicalStoreController],
  providers: [MedicalStoreService]
})
export class MedicalStoreModule {}
