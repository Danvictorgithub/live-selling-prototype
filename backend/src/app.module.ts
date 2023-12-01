import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { PrismaModule } from './db/prisma/prisma.module';

@Module({
  imports: [MessagesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
