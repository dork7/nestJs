import { Injectable } from '@nestjs/common';
import { Request } from 'supertest';

@Injectable()
export class AppService {
  getHello(request?: Request): string {
    // console.log(`request`, request);
    return 'Hello World!';
  }
  saveInfo(request?: Request): string {
    // console.log(`request`, request);
    return 'newww';
  }
}
