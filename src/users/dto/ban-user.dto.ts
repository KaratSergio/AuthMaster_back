import { ApiProperty } from '@nestjs/swagger/dist';

export class BanUserDto {
  @ApiProperty({ example: 7, description: 'user id' })
  readonly userId: number;

  @ApiProperty({ example: 'spam', description: 'Ban reason' })
  readonly banReason: string;
}
