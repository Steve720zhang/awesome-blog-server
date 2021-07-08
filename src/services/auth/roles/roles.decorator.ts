import { SetMetadata } from '@nestjs/common';
import { Roles as RolesEnum } from './roles.constant';

export const Roles = (roles: RolesEnum) => SetMetadata('roles', roles);
