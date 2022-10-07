import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatssModule } from './catss/catss.module';

@Module({
  imports: [CatssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
