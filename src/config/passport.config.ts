import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../microservices/auth/strategies/local.strategy';
import { JwtStrategy } from '../microservices/auth/strategies/jwt.strategy';
import { GoogleStrategy } from '../microservices/auth/strategies/google.strategy';
import { MicrosoftStrategy } from '../microservices/auth/strategies/microsoft.strategy';

export const passportConfig = {
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [LocalStrategy, JwtStrategy, GoogleStrategy, MicrosoftStrategy],
  exports: [PassportModule],
};