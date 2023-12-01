import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    return {message:"Live Selling API Test"};
  }
}
