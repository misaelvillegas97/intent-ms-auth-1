import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AuthEntity } from '../microservices/auth/auth.entity';
import { UsersEntity } from '../microservices/users/users.entity';
import { RolesEntity } from '../microservices/roles/roles.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [AuthEntity, UsersEntity, RolesEntity],
  synchronize: process.env.TYPEORM_SYNC === 'true',
};
