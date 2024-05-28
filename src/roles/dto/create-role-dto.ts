import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'unique user role' })
  @IsString()
  readonly value: string;

  @ApiProperty({ example: 'follower', description: 'user role' })
  @IsString()
  readonly description: string;
}
