import { Strategy } from 'passport-local';
import { AbstractStrategy, PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';
import { ExtractJwt } from 'passport-jwt';
import { LoginRequestParams } from 'src/types/login';

@Injectable()
export class LoginStrategy extends PassportStrategy(Strategy, 'login') {
    constructor(private readonly authService: AuthService) {
        super({
            passReqToCallback: true,
            usernameField: 'username',
            passworkField: 'password',
        })
    }

    async validate(payload: any, username: any, password: any, callback2: any): Promise<any> {
        // console.log('LoginStrategy: validate payload:', Object.keys(payload), callback, callback1, callback2.toString())
        const reqBody: LoginRequestParams = payload.body;
        const validateResult = await this.authService.validateUserWhenLogin(reqBody)
        return { accessToken: validateResult }
    }
}
