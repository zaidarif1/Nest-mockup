import { Module } from '@nestjs/common';
import { FacebookAuthService } from './facebook-auth.service';
import { FaceBookAuthController } from './facebook-auth.controller';
import { GoogleStrategy } from './facebook-auth.stretegy';

@Module({
  imports: [],
  providers: [FacebookAuthService, GoogleStrategy],
  controllers: [FaceBookAuthController]
})
export class GoogleOauthModule {}
