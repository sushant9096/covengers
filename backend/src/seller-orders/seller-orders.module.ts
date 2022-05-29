import { Module } from '@nestjs/common';
import { SellerOrdersService } from './seller-orders.service';
import { SellerOrdersController } from './seller-orders.controller';

@Module({
  controllers: [SellerOrdersController],
  providers: [SellerOrdersService]
})
export class SellerOrdersModule {}
