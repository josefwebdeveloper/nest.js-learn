import { Injectable } from '@nestjs/common';
import { Item } from './inrerfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {
  }

  // private readonly items:Item[]=[
  //   {
  //     id:"87878788878787",
  //     name:"item one",
  //     qty:100,
  //     description:"hjhkhhjhk"
  //   },
  //   {
  //     id:"8787878885578787",
  //     name:"item two",
  //     qty:101,
  //     description:"jkjkkl"
  //   }
  // ];
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }
}
