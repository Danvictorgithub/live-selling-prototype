import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { PrismaModule } from 'src/db/prisma/prisma.module';

@Module({
  providers: [MessagesGateway, MessagesService],
  imports: [PrismaModule]
})
export class MessagesModule {}
