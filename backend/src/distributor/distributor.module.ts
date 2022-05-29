import { Module } from '@nestjs/common';
import { DistributorService } from './distributor.service';
import { DistributorController } from './distributor.controller';

@Module({
  controllers: [DistributorController],
  providers: [DistributorService]
})
export class DistributorModule {}
