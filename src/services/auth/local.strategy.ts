import { Strategy } from 'passport-local';
import { PassportStrategy, AbstractStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'another') {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(userinfo: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(userinfo, password);
        if (!user) {
            return null;
        }
        return user;
    }
}
