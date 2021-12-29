/**
 * @author: ntwari egide
 * @description: main application service of the application
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to fix and fork platform apis!';
  }
}
