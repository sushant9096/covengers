import { Injectable } from '@nestjs/common';
import { CreateMedicalStoreDto } from './dto/create-medical-store.dto';
import { UpdateMedicalStoreDto } from './dto/update-medical-store.dto';

@Injectable()
export class MedicalStoreService {
  create(createMedicalStoreDto: CreateMedicalStoreDto) {
    return 'This action adds a new medicalStore';
  }

  findAll() {
    return `This action returns all medicalStore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalStore`;
  }

  update(id: number, updateMedicalStoreDto: UpdateMedicalStoreDto) {
    return `This action updates a #${id} medicalStore`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalStore`;
  }
}
