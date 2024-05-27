import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'user role' })
  @IsString({ message: 'only string' })
  readonly value: string;

  @ApiProperty({ example: 7, description: 'user id' })
  @IsNumber({}, { message: 'only number' })
  readonly userId: number;
}
