import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WholesalerModule } from './wholesaler/wholesaler.module';
import { RetailerModule } from './retailer/retailer.module';
import { StockModule } from './stock/stock.module';

@Module({
  imports: [WholesalerModule, RetailerModule, StockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
