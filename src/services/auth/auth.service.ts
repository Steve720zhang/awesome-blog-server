import { Injectable } from '@nestjs/common';
import { UserService, findUserConditions } from '../../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async validateUser(userinfo: findUserConditions, pass: string): Promise<any> {
    const user = await this.usersService.findOneByConditions(userinfo);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}