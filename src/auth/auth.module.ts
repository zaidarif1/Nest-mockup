import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
