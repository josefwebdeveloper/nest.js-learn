import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/ctrate-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
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
