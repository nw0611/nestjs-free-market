import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { ItemStatus } from './item-status.enum';

// itemsに紐付け
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Post()
  create(
    @Body('id') id: string, // リクエストbodyに含めるために@Body('{parameter}')
    @Body('name') name : string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const Item: Item = {
      id,
      name,
      price,
      description,
    }
    return this.itemsService.create(Item)
  }
}
