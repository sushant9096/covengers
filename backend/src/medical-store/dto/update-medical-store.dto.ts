import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalStoreDto } from './create-medical-store.dto';

export class UpdateMedicalStoreDto extends PartialType(CreateMedicalStoreDto) {}
