import { Injectable } from '@nestjs/common';
import sequelize from 'sequelize';

import { Wholesaler } from 'src/wholesaler/entities/wholesaler.entity';
import { CreateRetailerDto } from './dto/create-retailer.dto';
import { UpdateRetailerDto } from './dto/update-retailer.dto';
import { Retailer } from './entities/retailer.entity';

@Injectable()
export class RetailerService {
 async create(createRetailerDto: CreateRetailerDto) {

  let wholesaler = await Wholesaler.findByPk(createRetailerDto.wholesalerId)
    return await Retailer.create({
      name:createRetailerDto.name,
      mobile_number:createRetailerDto.mobile_number,
      wholesalerId:wholesaler.id
    });
  }

 async findAll() {

  return await Retailer.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} retailer`;
  }

  update(id: number, updateRetailerDto: UpdateRetailerDto) {
    return `This action updates a #${id} retailer`;
  }

 async remove(id: number) {
    return await Retailer.destroy({where:{id:id}});
  }

  async findAwholeSaler(){
    let wholesaler = await Wholesaler.findOne()

    return await Retailer.findOne({where:{
      wholesalerId:{
        [sequelize.Op.eq]: wholesaler.id
      }
    }});
  }

  //***//let wholesaler = await Retailer.findOne({})
}
