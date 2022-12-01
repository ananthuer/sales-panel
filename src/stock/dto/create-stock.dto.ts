import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'


export class CreateStockDto {
    @IsString()
    @ApiProperty()
    readonly stock_amount: number;

    @IsString()
    @ApiProperty()
    readonly date: string;

    @IsString()
    @ApiProperty()
    readonly retailer_id: number;

    @IsString()
    @ApiProperty()
    readonly wholesaler_id: number;
}
