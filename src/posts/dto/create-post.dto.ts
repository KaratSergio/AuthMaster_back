import { ApiProperty } from '@nestjs/swagger/dist';

export class CreatePostDto {
  @ApiProperty({ example: 'Team work', description: 'post title' })
  readonly title: string;

  @ApiProperty({
    example: 'Communication, cooperation, trust, responsibility, support.',
    description: 'post description',
  })
  readonly content: string;

  @ApiProperty({ example: 7, description: 'author of the post' })
  readonly userId: number;
}
