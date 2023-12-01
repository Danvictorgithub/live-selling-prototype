import { Module } from '@nestjs/common';
import { LivestreamService } from './livestream.service';
import { LivestreamGateway } from './livestream.gateway';

@Module({
  providers: [LivestreamGateway, LivestreamService],
})
export class LivestreamModule {}
