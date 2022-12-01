import { Model, Table, Column, PrimaryKey, DataType, HasMany, ForeignKey, BelongsToMany, HasOne } from 'sequelize-typescript';
import { Retailer } from 'src/retailer/entities/retailer.entity';
import { Stock } from 'src/stock/entities/stock.entity';

@Table
export class Wholesaler extends Model {
    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER })
    mobile_number: number;

    @HasMany(() => Retailer)
    retailers: Retailer[]

    @ForeignKey(() => Retailer)
    @Column({ type: DataType.INTEGER })
    retailerId: Retailer

    @HasMany(() => Stock)
    stocks: Stock[]
  getStocks: any;
}
