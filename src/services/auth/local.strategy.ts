import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(userinfo: findUserConditions, password: string): Promise<any> {
        const user = await this.authService.validateUser(userinfo, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
