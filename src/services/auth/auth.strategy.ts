import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy, AbstractStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'auth') {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            passReqToCallback: true,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: any): Promise<any> {
        console.log('JwtStrategy: validate11:')
        return payload;
    }
}
