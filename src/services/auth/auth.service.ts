import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService, findUserConditions } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestParams } from 'src/types/login';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) { }

  verifyUser(token: string) {
    if (token.startsWith('Bearer ')) {
      token = token.replace('Bearer ', '')
    }
    return this.jwtService.verify(token)
  }
  
  async validateUserWhenLogin(payload: LoginRequestParams): Promise<any> {
    const condition: any = { ...payload }
    delete condition['password']
    const user = await this.usersService.findOneByConditions(condition);
    if (user && user.password === payload.password) {
      const jwtPayload = {
        username: user.username,
        nickname: user.nickname,
        avatar: user.avatar || '',
        role: user.role,
      }
      return this.jwtService.sign(jwtPayload)
    } else {
      throw new UnauthorizedException()
    }
  }
}