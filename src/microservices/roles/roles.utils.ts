import { Injectable } from '@nestjs/common';
import { Role } from './roles.entity';

@Injectable()
export class RolesUtils {
  constructor() {}

  // Function to check if a role exists in the roles array
  roleExists(role: string, roles: Role[]): boolean {
    return roles.some((r) => r.name === role);
  }

  // Function to add a role to the roles array
  addRole(role: string, roles: Role[]): Role[] {
    if (!this.roleExists(role, roles)) {
      roles.push(new Role(role));
    }
    return roles;
  }

  // Function to remove a role from the roles array
  removeRole(role: string, roles: Role[]): Role[] {
    if (this.roleExists(role, roles)) {
      return roles.filter((r) => r.name !== role);
    }
    return roles;
  }

  // Function to update a role in the roles array
  updateRole(oldRole: string, newRole: string, roles: Role[]): Role[] {
    if (this.roleExists(oldRole, roles)) {
      return roles.map((r) => (r.name === oldRole ? new Role(newRole) : r));
    }
    return roles;
  }
}