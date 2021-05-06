import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminController, AccountController],
  providers: [AppService],
})
export class AppModule {}
