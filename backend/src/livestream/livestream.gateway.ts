import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { LivestreamService } from './livestream.service';
import { CreateLivestreamDto } from './dto/create-livestream.dto';
import { UpdateLivestreamDto } from './dto/update-livestream.dto';

@WebSocketGateway()
export class LivestreamGateway {
  constructor(private readonly livestreamService: LivestreamService) {}

  @SubscribeMessage('createLivestream')
  create(@MessageBody() createLivestreamDto: CreateLivestreamDto) {
    return this.livestreamService.create(createLivestreamDto);
  }

  @SubscribeMessage('findAllLivestream')
  findAll() {
    return this.livestreamService.findAll();
  }

  @SubscribeMessage('findOneLivestream')
  findOne(@MessageBody() id: number) {
    return this.livestreamService.findOne(id);
  }

  @SubscribeMessage('updateLivestream')
  update(@MessageBody() updateLivestreamDto: UpdateLivestreamDto) {
    return this.livestreamService.update(updateLivestreamDto.id, updateLivestreamDto);
  }

  @SubscribeMessage('removeLivestream')
  remove(@MessageBody() id: number) {
    return this.livestreamService.remove(id);
  }
}
