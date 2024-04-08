import { Controller, Get } from '@nestjs/common';

// itemsに紐付け
@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'This is findAll'
  }
}
