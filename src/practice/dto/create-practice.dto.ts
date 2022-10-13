import { IsString } from 'class-validator';
export class CreatePracticeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly topic: string;
  @IsString({ each: true })
  readonly type: string[];
}
