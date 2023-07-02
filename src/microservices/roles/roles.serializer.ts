import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { RoleService } from './roles.service';

@Injectable()
export class RoleSerializer extends PassportSerializer {
  constructor(private readonly roleService: RoleService) {
    super();
  }

  serializeUser(role: any, done: CallableFunction) {
    done(null, role);
  }

  async deserializeUser(payload: any, done: CallableFunction) {
    const role = await this.roleService.findOneById(payload.id);
    done(null, role);
  }
}