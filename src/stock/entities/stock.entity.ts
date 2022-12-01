import { Model, Table, Column, PrimaryKey, DataType, HasMany, ForeignKey, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Retailer } from 'src/retailer/entities/retailer.entity';
import { Wholesaler } from 'src/wholesaler/entities/wholesaler.entity';

@Table
export class Stock extends Model{
    @Column({ type: DataType.FLOAT })
    stock_amount: number;

    @Column({ type: DataType.STRING })
    date: string;

    @ForeignKey(() => Retailer)
    @Column({ type: DataType.INTEGER })
    retailerId: number;

    @ForeignKey(() => Wholesaler)
    @Column({ type: DataType.INTEGER })
    wholesalerId: number;
  

    getTotal():number{
        return this.stock_amount
    }
}
