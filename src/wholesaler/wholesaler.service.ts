import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { CreatedAt } from 'sequelize-typescript';
import { Retailer } from 'src/retailer/entities/retailer.entity';
import { CreateWholesalerDto } from './dto/create-wholesaler.dto';
import { UpdateWholesalerDto } from './dto/update-wholesaler.dto';
import { Wholesaler } from './entities/wholesaler.entity';

@Injectable()
export class WholesalerService {
async  create(createWholesalerDto: CreateWholesalerDto) {

  let retailer = await Retailer.findByPk(createWholesalerDto.retailerId)
    return await Wholesaler.create({
      name:createWholesalerDto.name,
      mobile_number:createWholesalerDto.mobile_number,
      retailerId:retailer.id
    });
  }

 async findAll() {
    return await Wholesaler.findAll({
      include:{
        model:Retailer,
        as: "retailers"
      }
    });
  }

 async findOne(id: number) {
    return await Wholesaler.findByPk(id, {
      include:{
        model:Retailer,
        as: "retailers"
      }
    });
  }

  update(id: number, updateWholesalerDto: UpdateWholesalerDto) {
    return `This action updates a #${id} wholesaler`;
  }

 async remove(id: number) {
    return await Wholesaler.destroy({where:{id:id}});
  }

  
}
