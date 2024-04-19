import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { CreateItemDto } from './create-item.dto';
import { ItemStatus } from './item-status.enum';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemRepository) {}

  // constructor(
  //   @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  // ) {}
  private items: Item[] = []

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find()
  }

  async findById(id: string): Promise<Item> {
    const found = await this.itemRepository.findOne({ id });
    // if (!found) {
    //   throw new NotFoundException();
    // }
    return found;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    console.log('creaete createItemDto', createItemDto)
    return this.itemRepository.createItem(createItemDto)
  }

  async updateStatus(id: string): Promise<Item> {
    const item = await this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    item.updatedAt = new Date().toISOString();
    await this.itemRepository.save(item)
    // if (updatedItem.affected === 0) {
    //   throw new NotFoundException(`${id}のデータを更新できませんでした`);
    // }
    return item;
  }

  async delete(id: string): Promise<void> {
    await this.itemRepository.delete({ id });
    // if (response.affected !== 1) {
    //   throw new NotFoundException(`${id}のデータを削除できませんでした`);
    // }
  }
}
