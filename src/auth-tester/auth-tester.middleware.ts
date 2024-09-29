import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuthTesterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const code = req.headers.authorization.split(' ')[1];
    if (code != 'agfktjkgyjuhynjm,hjlyitr7hujnghbchjk') {
      console.log('fake code!');
      console.log(code);
    } else {
      console.log('Correct code');
      req.body.user = 'middleware';
    }
    next();
  }
}
