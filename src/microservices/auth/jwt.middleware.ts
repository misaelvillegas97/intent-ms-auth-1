import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtConstants } from './jwt.constants';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      try {
        const decoded = verify(token, jwtConstants.secret);
        req.user = decoded;
      } catch (err) {
        console.error('Token verification failed:', err);
      }
    }

    next();
  }
}