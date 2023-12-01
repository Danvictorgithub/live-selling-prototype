import { Test, TestingModule } from '@nestjs/testing';
import { LivestreamGateway } from './livestream.gateway';
import { LivestreamService } from './livestream.service';

describe('LivestreamGateway', () => {
  let gateway: LivestreamGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LivestreamGateway, LivestreamService],
    }).compile();

    gateway = module.get<LivestreamGateway>(LivestreamGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
