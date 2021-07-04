import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './services/auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) { }

  @Get('hello')
  getHello(@Req() request: Request): string {
    const headers = request.headers
    console.log('headers:', headers)
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req: Request) {
    console.log('result:', req.body)
    const result = this.authService.login(req.user);
    console.log('result:', result)
    return result;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
