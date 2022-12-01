import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Stock')
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }

  @Get('wholesaler/:id')
  @ApiQuery({
    name: "Month",
    required: false
  })
  monthly(@Param('id') id: string, @Query('Month') month: string) {
    return this.stockService.monthly(+id, month);
  }
  @Get('retailer/wholesaler/:id')
  maxTurnOver(@Param('id') id: string) {
    return this.stockService.maxTurnOver(+id);
  }
}
