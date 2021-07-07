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

  async validateUserWhenLogin(payload: LoginRequestParams): Promise<any> {
    const condition: any = { ...payload }
    delete condition['password']
    const user = await this.usersService.findOneByConditions(condition);
    if (user && user.password === payload.password) {
      return this.jwtService.sign(condition)
    } else {
      throw new UnauthorizedException()
    }
  }
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByConditions({ username });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}