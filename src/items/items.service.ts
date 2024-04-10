import { Injectable, Get } from '@nestjs/common';
import { Item } from './item.model';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemStatus } from './item-status.enum';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  @Get()
  findAll(): Item[] {
    return this.items
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id)
  }

  create(createItemDto: CreateItemDto): Item {
    const Items: Item = {
      ...createItemDto,
      status: ItemStatus.ON_SALE
    }
    this.items.push(Items)
    return Items
  }

  updateStatus(id: string): Item {
    const item = this.findById(id)
    item.status = ItemStatus.SOLD_OUT
    return item
  }

  delete(id: string): void {
    this.items === this.items.filter((item) => item.id === id)
  }
}
