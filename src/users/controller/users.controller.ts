import { Controller, Get, HttpCode, HttpStatus, Header, Post, Redirect, Query, Param, Body, Put, Delete } from '@nestjs/common';
import { UserDto } from '../user.dto';
import { UsersService } from '../service/users.service';
import { User } from '../../interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  // Can set prefix here i.e @Get(all)
  // Route can be this users/all
  // Wildcard route can be company_*
  // Route can be this users/company_a | users/company_b
  // Get(1)
  // @Get()
  // // @Header('Cache-Control', 'none')
  // getUsers(): string {
  //   return 'This action returns all users';
  // }

  // Post(1)
  // @Post()
  // @HttpCode(204)
  // setUser(): string {
  //   return 'This action adds a new user';
  // }

  // Post(2)
  // @Post()
  // setUser(@Body() userDto: UserDto) {
  //   return 'This action adds a new user';
  // }

  // Post(3)
  @Post()
  async setUser(@Body() userDto: UserDto) {
    this.userService.setUser(userDto)
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  // With redirect
  // Optional url and status code
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  
  // Route parameters
  // Access through params
  @Get(':id')
  getUserById(@Param() params: UserDto) {
    // console.log(params.id);
    return `This action return a #${params.id} user`;
  }

  // Specifically defined in param()
  // @Get(':id')
  // getUserById(@Param('id') id: string){
  //   console.log(id);
  //   return `This action return a #${id} user`;
  // }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() body: UserDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
