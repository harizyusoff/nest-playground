//DTO - Data Transfer Object
// An obj defines how the data will be sent over the network
import { IsNumberString, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  nationality: string;
}