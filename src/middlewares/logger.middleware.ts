import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('Request...:', { url: req.url, headers: req.header });
        console.log('Response...:', { status: res.statusCode });
        next();
    }
}