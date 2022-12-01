import { Module } from '@nestjs/common';
import { RetailerService } from './retailer.service';
import { RetailerController } from './retailer.controller';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [RetailerController],
  providers: [RetailerService]
})
export class RetailerModule {}
