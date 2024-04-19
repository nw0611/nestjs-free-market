import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './create-item.dto';
// import { Role } from '../auth/decorator/role.decorator';
// import { UserStatus } from '../auth/user-status.enum';

@Controller('items')
@UseInterceptors(ClassSerializerInterceptor)
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @Patch(':id')
  async updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<Item> {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<void> {
    return await this.itemsService.delete(id);
  }
}
