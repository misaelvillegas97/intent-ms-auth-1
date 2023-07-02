import { Transport } from '@nestjs/microservices';

export const microservicesConfig = {
  auth: {
    name: 'AUTH_SERVICE',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001,
    },
  },
  users: {
    name: 'USERS_SERVICE',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3002,
    },
  },
  roles: {
    name: 'ROLES_SERVICE',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3003,
    },
  },
};