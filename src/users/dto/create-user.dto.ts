import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'karat@gmail.ua', description: 'incorrect email' })
  @IsString({ message: 'only string' })
  @IsEmail({}, { message: 'email' })
  readonly email: string;

  @ApiProperty({ example: '3345651', description: 'user password' })
  @IsString({ message: 'only string' })
  @Length(4, 16, { message: 'no less than 4 and no more than 16 characters' })
  readonly password: string;
}
