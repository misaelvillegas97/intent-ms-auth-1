import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './jwt.constants';

@Injectable()
export class JwtUtils {
  constructor(private readonly jwtService: JwtService) {}

  async validateToken(token: string): Promise<JwtPayload> {
    return this.jwtService.verifyAsync(token);
  }

  async createToken(payload: JwtPayload): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}