//DTO - Data Transfer Object
// An obj defines how the data will be sent over the network
import { IsNumberString, IsNumber } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;
  name: string;
  age: string;
  nationality: string;
}