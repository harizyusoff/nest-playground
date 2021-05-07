import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/controller/users.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { UsersService } from './users/service/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AdminController, AccountController],
  providers: [AppService, UsersService],
})
export class AppModule {}
