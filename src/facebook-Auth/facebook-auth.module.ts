import { Module } from '@nestjs/common';
import { FacebookAuthService } from './facebook-auth.service';
import { FaceBookAuthController } from './facebook-auth.controller';
import { FacebookStrategy } from './facebook-auth.stretegy';

@Module({
  imports: [],
  providers: [FacebookAuthService, FacebookStrategy],
  controllers: [FaceBookAuthController]
})
export class FacebookAuthModule {}
