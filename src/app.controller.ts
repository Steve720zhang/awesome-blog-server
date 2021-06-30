import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() request: Request): string {
    const headers = request.headers
    console.log('headers:', headers)
    return this.appService.getHello();
  }
}
