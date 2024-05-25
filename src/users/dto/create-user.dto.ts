import { ApiProperty } from '@nestjs/swagger/dist';

export class createUserDto {
  @ApiProperty({ example: 'karat@gmail.ua', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: '3345651', description: 'user password' })
  readonly password: string;
}
