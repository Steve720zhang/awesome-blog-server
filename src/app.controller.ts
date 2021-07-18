import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthGuard as myAuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoginStrategy } from './services/auth/login.strategy';
import { Roles } from './services/auth/roles/roles.decorator';
import { Roles as RolesEnum } from './services/auth/roles/roles.constant';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';



@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) { }

  @Get('hello')
  @ApiOperation({ summary: 'test' })
  getHello(@Req() request: Request): string {
    const headers = request.headers
    console.log('headers:', headers)
    return this.appService.getHello();
  }

  @Post('auth/login')
  @UseGuards(AuthGuard('login'))
  async loginAuth(@Req() req: Request) {
    console.log('result:', req.user)
    return req.user;
  }

  @UseGuards(AuthGuard('auth'))
  @Get('profile')
  getProfile(@Req() req: Request) {
    // console.log('profile:', req)
    return req.user;
  }

  @Roles(RolesEnum.Member)
  @UseGuards(myAuthGuard)
  @Get('profile2')
  getProfile2(@Req() req: Request) {
    // console.log('profile:', req.user)
    // console.log('Obj keys:', Object.keys(req))
    return req.user;
  }
}
