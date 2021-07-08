import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, SetMetadata, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Roles } from './roles/roles.constant';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private reflector: Reflector
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<Roles>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();
        const requestHeaders = request.headers
        const { authorization } = requestHeaders
        if (authorization) {
            const res = this.authService.verifyUser(authorization)
            if (!res || !res.username) {
                throw new UnauthorizedException()
            }
            if (roles.valueOf() > res.role) {
                throw new ForbiddenException()
            }
        }
        return true
    }

}
