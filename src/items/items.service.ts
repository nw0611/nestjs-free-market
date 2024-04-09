import { Injectable, Get } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  @Get()
  findAll() {
    return 'This is items service'
  }

  create(item: Item): Item {
    this.items.push()
    return item
  }
}
