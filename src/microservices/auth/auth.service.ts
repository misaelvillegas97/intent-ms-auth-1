import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportSerializer } from './passport.serializer';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { MicrosoftStrategy } from './strategies/microsoft.strategy';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private passportSerializer: PassportSerializer,
    private jwtStrategy: JwtStrategy,
    private localStrategy: LocalStrategy,
    private googleStrategy: GoogleStrategy,
    private microsoftStrategy: MicrosoftStrategy,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }

  microsoftLogin(req) {
    if (!req.user) {
      return 'No user from microsoft'
    }

    return {
      message: 'User information from microsoft',
      user: req.user
    }
  }
}