import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
