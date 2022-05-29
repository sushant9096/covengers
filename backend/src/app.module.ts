import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { DistributorModule } from './distributor/distributor.module';
import { MedicalStoreModule } from './medical-store/medical-store.module';
import { SellerModule } from './seller/seller.module';
import { DistributorOrdersModule } from './distributor-orders/distributor-orders.module';
import { SellerOrdersModule } from './seller-orders/seller-orders.module';
import { DrugModule } from './drug/drug.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CompanyModule, DistributorModule, MedicalStoreModule, SellerModule, DistributorOrdersModule, SellerOrdersModule, DrugModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
