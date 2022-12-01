import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RetailerService } from './retailer.service';
import { CreateRetailerDto } from './dto/create-retailer.dto';
import { UpdateRetailerDto } from './dto/update-retailer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Retailer')
@Controller('retailer')
export class RetailerController {
  constructor(private readonly retailerService: RetailerService) {}

  @Post()
  create(@Body() createRetailerDto: CreateRetailerDto) {
    return this.retailerService.create(createRetailerDto);
  }

  @Get()
  findAll() {
    return this.retailerService.findAll();
  }

  @Get('One-wholesaler')
  findAwholeSaler() {
    return this.retailerService.findAwholeSaler();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retailerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetailerDto: UpdateRetailerDto) {
    return this.retailerService.update(+id, updateRetailerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retailerService.remove(+id);
  }
}
