import { Module } from '@nestjs/common';
import { DistributorOrdersService } from './distributor-orders.service';
import { DistributorOrdersController } from './distributor-orders.controller';

@Module({
  controllers: [DistributorOrdersController],
  providers: [DistributorOrdersService]
})
export class DistributorOrdersModule {}
