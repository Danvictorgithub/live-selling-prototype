import { Injectable } from '@nestjs/common';
import { CreateLivestreamDto } from './dto/create-livestream.dto';
import { UpdateLivestreamDto } from './dto/update-livestream.dto';

@Injectable()
export class LivestreamService {
  create(createLivestreamDto: CreateLivestreamDto) {
    return 'This action adds a new livestream';
  }

  findAll() {
    return `This action returns all livestream`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livestream`;
  }

  update(id: number, updateLivestreamDto: UpdateLivestreamDto) {
    return `This action updates a #${id} livestream`;
  }

  remove(id: number) {
    return `This action removes a #${id} livestream`;
  }
}
