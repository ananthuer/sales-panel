import { Model, Table, Column, PrimaryKey, DataType, HasMany, ForeignKey, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Stock } from 'src/stock/entities/stock.entity';
import { Wholesaler } from 'src/wholesaler/entities/wholesaler.entity';

@Table
export class Retailer extends Model{
    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER })
    mobile_number: number;

    @HasMany(() => Wholesaler)
    wholesalers: Wholesaler[]

    @ForeignKey(() => Wholesaler)
    @Column({ type: DataType.INTEGER })
    wholesalerId: Wholesaler

    @HasMany(() => Stock)
    stocks: Stock[]
  getStocks: any;
}
