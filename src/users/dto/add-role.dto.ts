import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'only string' })
  readonly value: string;
  @IsNumber({}, { message: 'only number' })
  readonly userId: number;
}
