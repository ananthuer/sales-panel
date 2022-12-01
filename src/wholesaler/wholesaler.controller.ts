import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WholesalerService } from './wholesaler.service';
import { CreateWholesalerDto } from './dto/create-wholesaler.dto';
import { UpdateWholesalerDto } from './dto/update-wholesaler.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Whole Saler')
@Controller('wholesaler')
export class WholesalerController {
  constructor(private readonly wholesalerService: WholesalerService) {}

  @Post()
  create(@Body() createWholesalerDto: CreateWholesalerDto) {
    return this.wholesalerService.create(createWholesalerDto);
  }

  @Get()
  findAll() {
    return this.wholesalerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wholesalerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWholesalerDto: UpdateWholesalerDto) {
    return this.wholesalerService.update(+id, updateWholesalerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wholesalerService.remove(+id);
  }
}
