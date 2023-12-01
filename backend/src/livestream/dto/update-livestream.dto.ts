import { PartialType } from '@nestjs/mapped-types';
import { CreateLivestreamDto } from './create-livestream.dto';

export class UpdateLivestreamDto extends PartialType(CreateLivestreamDto) {
  id: number;
}
