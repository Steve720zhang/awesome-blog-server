import { Strategy } from 'passport-local';
import { PassportStrategy, AbstractStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(userinfo: string, password: string): Promise<any> {
        console.log('LocalStrategy: validate: => start:', userinfo, password)
        const user = await this.authService.validateUser(userinfo, password);
        console.log('LocalStrategy: validate: => user:', user)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
