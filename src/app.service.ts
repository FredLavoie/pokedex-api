import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    const data = {
      name: 'bob',
    };
    return JSON.stringify(data);
  }
}
