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
        if (roles <= 0) {
            return true
        }
        const request = context.switchToHttp().getRequest();
        const requestHeaders = request.headers
        // console.log('requestHeaders:', requestHeaders)
        const { authorization } = requestHeaders
        // console.log('authorization:', authorization)
        // console.log('roles:', roles)
        
        if (authorization) {
            const res = this.authService.verifyUser(authorization)
            // console.log('authorization/res:', res)
            if (!res || !res.username) {
                throw new UnauthorizedException()
            }
            if (roles.valueOf() > res.role) {
                throw new ForbiddenException()
            }
            request.user = res;
            return res
        } else {
            throw new UnauthorizedException()
        }
    }

}
