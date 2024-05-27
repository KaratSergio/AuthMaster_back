import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'unique user role' })
  readonly value: string;
  @ApiProperty({ example: 'follower', description: 'user role' })
  readonly description: string;
}
