import { Module } from '@nestjs/common';
import { WholesalerService } from './wholesaler.service';
import { WholesalerController } from './wholesaler.controller';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [WholesalerController],
  providers: [WholesalerService]
})
export class WholesalerModule {}
