import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { RolesService } from '../roles.service';

@Injectable()
export class RoleStrategy extends PassportStrategy(Strategy, 'role') {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  async validate(request: Request): Promise<any> {
    const role = request.headers['x-role'];
    const isValidRole = await this.rolesService.validateRole(role);
    if (!isValidRole) {
      throw new UnauthorizedException();
    }
    return { role };
  }
}