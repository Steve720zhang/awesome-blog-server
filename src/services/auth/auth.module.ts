import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LoginStrategy } from './login.strategy';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '7200s',
      }
    })
  ],
  providers: [AuthService, AuthStrategy, LoginStrategy, AuthGuard],
  exports: [AuthService]
})
export class AuthModule { }
