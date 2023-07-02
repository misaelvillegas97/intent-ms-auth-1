import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './roles.entity';
import { RoleDto } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async create(roleDto: RoleDto): Promise<RoleEntity> {
    const role = new RoleEntity();
    role.name = roleDto.name;
    role.permissions = roleDto.permissions;

    return await this.roleRepository.save(role);
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  async findOne(id: string): Promise<RoleEntity> {
    return await this.roleRepository.findOne(id);
  }

  async update(id: string, roleDto: RoleDto): Promise<void> {
    await this.roleRepository.update(id, roleDto);
  }

  async remove(id: string): Promise<void> {
    await this.roleRepository.delete(id);
  }
}