import { ApiProperty } from '@nestjs/swagger';
import { IsString} from  'class-validator'


export class CreateRetailerDto {
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly mobile_number: number;

    @IsString()
    @ApiProperty()
    readonly wholesalerId: number;
}
