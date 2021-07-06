import { Strategy } from 'passport-local';
import { PassportStrategy, AbstractStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class LoginStrategy extends AbstractStrategy {
    
    async validate(data: any): Promise<any> {
        console.log('LoginStrategy: validate:', data)
        // console.log('LocalStrategy: validate: => start:', userinfo, password)
        // const user = await this.authService.validateUser(userinfo, password);
        // console.log('LocalStrategy: validate: => user:', user)
        // if (!user) {
        //     return null;
        // }
        // return user;
        return null
    }
}
