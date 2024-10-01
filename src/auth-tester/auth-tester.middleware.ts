import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthTesterMiddleware implements NestMiddleware {
  use(req, res, next) {
    const code = req.headers.authorization.split(' ')[1];
    if (code != 'aguntuk') {
      console.log('fake code!');
      console.log(code);
    } else {
      console.log('Correct code');
      req.body.user = 'middleware';
    }
    next();
  }
}
