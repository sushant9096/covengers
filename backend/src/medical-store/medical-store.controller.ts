import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalStoreService } from './medical-store.service';
import { CreateMedicalStoreDto } from './dto/create-medical-store.dto';
import { UpdateMedicalStoreDto } from './dto/update-medical-store.dto';

@Controller('medical-store')
export class MedicalStoreController {
  constructor(private readonly medicalStoreService: MedicalStoreService) {}

  @Post()
  create(@Body() createMedicalStoreDto: CreateMedicalStoreDto) {
    return this.medicalStoreService.create(createMedicalStoreDto);
  }

  @Get()
  findAll() {
    return this.medicalStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalStoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalStoreDto: UpdateMedicalStoreDto) {
    return this.medicalStoreService.update(+id, updateMedicalStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalStoreService.remove(+id);
  }
}
