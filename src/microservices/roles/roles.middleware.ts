import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RolesService } from './roles.service';

@Injectable()
export class RolesMiddleware implements NestMiddleware {
  constructor(private readonly rolesService: RolesService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userRoles = req.user.roles;
    const hasAccess = await this.rolesService.validateRoles(userRoles);

    if (!hasAccess) {
      return res.status(403).json({ message: 'You do not have permission to perform this action' });
    }

    next();
  }
}