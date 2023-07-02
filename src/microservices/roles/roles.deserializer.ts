import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { RolesService } from './roles.service';

@Injectable()
export class RolesDeserializer extends PassportSerializer {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  deserializeUser(payload: any, done: CallableFunction) {
    this.rolesService
      .findById(payload.id)
      .then(user => done(null, user))
      .catch(error => done(error));
  }
}