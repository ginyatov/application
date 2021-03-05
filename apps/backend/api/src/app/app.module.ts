import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { environment } from '../environments/environment';

@Module({
  imports: [
    TypeOrmCoreModule.forRoot({
      ...environment.connection
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
