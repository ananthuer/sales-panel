import { Injectable } from '@nestjs/common';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import { Retailer } from 'src/retailer/entities/retailer.entity';
import { Wholesaler } from 'src/wholesaler/entities/wholesaler.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
 async create(createStockDto: CreateStockDto) {

  let retailer = await Retailer.findByPk(createStockDto.retailer_id)
  let wholesaler = await Wholesaler.findByPk(createStockDto.wholesaler_id)
    return await Stock.create({
      stock_amount:createStockDto.stock_amount,
      date:createStockDto.date,
      retailerId: retailer.id,
      wholesalerId: wholesaler.id
    });
  }

async  findAll() {
    return await Stock.findAll();
  }

async  findOne(id: number) {
    return await Stock.findByPk(id);
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

async  remove(id: number) {
    return await Stock.destroy({where:{id:id}});
  }

  async monthly(id: number, month: string){

    let wholesaler = await Wholesaler.findByPk(id)

    let stock = await wholesaler.getStocks({where:{date:{
      [sequelize.Op.eq]: month
    }}})

    let totalrevenue: number = stock.reduce((amt, cp) => amt + cp.getTotal(), 0)


    return {monthly_turnover: totalrevenue}
    // let totalrevenue = await Stock.findOne({where:{}},{attributes: [
        
    //   [Sequelize.fn('sum', Sequelize.col('stock_amount')), 'turn_over'],

    // ]},)
  }

  async maxTurnOver(id: number){
    let wholesaler = await Wholesaler.findByPk(id)

   let retailer = await Retailer.findOne({where:{
      wholesalerId:{
        [sequelize.Op.eq]: wholesaler.id
      }
    }});
    let stock = await retailer.getStocks()

    let totalrevenue: number = stock.reduce((amt, cp) => amt + cp.getTotal(), 0)

    return {max_turnOver: totalrevenue}

  }
}
