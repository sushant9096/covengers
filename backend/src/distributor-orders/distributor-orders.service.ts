import { Injectable } from '@nestjs/common';
import { CreateDistributorOrderDto } from './dto/create-distributor-order.dto';
import { UpdateDistributorOrderDto } from './dto/update-distributor-order.dto';

@Injectable()
export class DistributorOrdersService {
  create(createDistributorOrderDto: CreateDistributorOrderDto) {
    return 'This action adds a new distributorOrder';
  }

  findAll() {
    return `This action returns all distributorOrders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} distributorOrder`;
  }

  update(id: number, updateDistributorOrderDto: UpdateDistributorOrderDto) {
    return `This action updates a #${id} distributorOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} distributorOrder`;
  }
}
