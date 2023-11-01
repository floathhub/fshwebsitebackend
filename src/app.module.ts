import { Module } from '@nestjs/common';
import { QuoteModule } from './quote/quote.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [QuoteModule, ServicesModule]
})
export class AppModule {}
