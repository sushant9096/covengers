import { Test, TestingModule } from '@nestjs/testing';
import { SellerOrdersController } from './seller-orders.controller';
import { SellerOrdersService } from './seller-orders.service';

describe('SellerOrdersController', () => {
  let controller: SellerOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerOrdersController],
      providers: [SellerOrdersService],
    }).compile();

    controller = module.get<SellerOrdersController>(SellerOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
