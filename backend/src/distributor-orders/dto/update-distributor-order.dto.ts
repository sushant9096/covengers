import { PartialType } from '@nestjs/mapped-types';
import { CreateDistributorOrderDto } from './create-distributor-order.dto';

export class UpdateDistributorOrderDto extends PartialType(CreateDistributorOrderDto) {}
