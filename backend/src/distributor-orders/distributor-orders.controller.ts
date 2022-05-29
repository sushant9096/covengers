import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistributorOrdersService } from './distributor-orders.service';
import { CreateDistributorOrderDto } from './dto/create-distributor-order.dto';
import { UpdateDistributorOrderDto } from './dto/update-distributor-order.dto';

@Controller('distributor-orders')
export class DistributorOrdersController {
  constructor(private readonly distributorOrdersService: DistributorOrdersService) {}

  @Post()
  create(@Body() createDistributorOrderDto: CreateDistributorOrderDto) {
    return this.distributorOrdersService.create(createDistributorOrderDto);
  }

  @Get()
  findAll() {
    return this.distributorOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributorOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistributorOrderDto: UpdateDistributorOrderDto) {
    return this.distributorOrdersService.update(+id, updateDistributorOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributorOrdersService.remove(+id);
  }
}
