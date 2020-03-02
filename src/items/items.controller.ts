import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/ctrate-item.dto';
import { ItemsService } from './items.service';
import { Item } from './inrerfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return  this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return  this.itemsService.findOne(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto):  Promise<Item> {
    return this.itemsService.create(createItemDto)
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Item deleted ${id}`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return `update ${id}---- ${updateItemDto.name}`;
  }
}
