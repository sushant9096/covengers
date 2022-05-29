import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellerOrdersService } from './seller-orders.service';
import { CreateSellerOrderDto } from './dto/create-seller-order.dto';
import { UpdateSellerOrderDto } from './dto/update-seller-order.dto';

@Controller('seller-orders')
export class SellerOrdersController {
  constructor(private readonly sellerOrdersService: SellerOrdersService) {}

  @Post()
  create(@Body() createSellerOrderDto: CreateSellerOrderDto) {
    return this.sellerOrdersService.create(createSellerOrderDto);
  }

  @Get()
  findAll() {
    return this.sellerOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellerOrderDto: UpdateSellerOrderDto) {
    return this.sellerOrdersService.update(+id, updateSellerOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerOrdersService.remove(+id);
  }
}
