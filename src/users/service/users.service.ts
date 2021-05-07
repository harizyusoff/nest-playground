import { Injectable } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';

@Injectable()
export class UsersService {
  // Current service provides
  // 1 property, 2 methods
  private readonly users: User[] = [];

  setUser(user: User) {
    user = {
      id: 2,
      name: 'Kay',
      age: 27,
      nationality: 'Malaysia'
    }
  
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

}
