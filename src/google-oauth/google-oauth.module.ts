import { Module } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';
import { GoogleOauthController } from './google-oauth.controller';
import { GoogleStrategy } from './google-oauth.stretegy';

@Module({
  imports: [],
  providers: [GoogleOauthService, GoogleStrategy],
  controllers: [GoogleOauthController]
})
export class GoogleOauthModule {}
