import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info): Observable<any> {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}