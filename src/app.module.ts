import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Class2, Users } from './TypeOrm';
import { UsersModule } from './users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { FacebookAuthModule } from './facebook-Auth/facebook-auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "GenPass1!",
      database: "students",
      entities: [Class2, Users],
      synchronize: true
    }), 
    TypeOrmModule.forFeature([Class2]),
    UsersModule,
    AuthModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    GoogleOauthModule,
    FacebookAuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    AuthService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ],
})
export class AppModule {}
