import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { connect } from 'http2';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma:PrismaService) {}
  async create(createMessageDto: CreateMessageDto) {
    let user = await this.prisma.user.findFirst({where:{name: createMessageDto.name}});
    if(!user) {
      user = await this.prisma.user.create({data:{name: createMessageDto.name}});
    }
    return await this.prisma.message.create({data:{name:{connect:{id:user.id}}, message:createMessageDto.message}});
  }

  async findAll() {
    return await this.prisma.message.findMany();
  }
  async identify(name:string,clientId:string) {
    const user = await this.prisma.user.findFirst({where:{name}});
    await this.prisma.clientToUser.create({data:{clientId:parseInt(clientId),userId:user.id}});
    return this.prisma.clientToUser.findMany();
  }

  getClientName(clientId:string) {
    return this.prisma.clientToUser.findUnique({where:{clientId:parseInt(clientId)}});
  }
}
