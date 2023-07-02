import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET || 'secretKey',
  signOptions: { expiresIn: '60s' },
}));