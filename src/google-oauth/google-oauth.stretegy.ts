import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor() {
    super({
      clientID: "954855165057-hh8lekff9h4m01o1jl1k41sic5dfnngl.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: 'http://localhost:3000/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    // console.log(request)
    const user = {
      profile,
      refreshToken,
      done,
      accessToken,
    }
    done(null, user);
  }
}

// Your Client ID
// 954855165057-hh8lekff9h4m01o1jl1k41sic5dfnngl.apps.googleusercontent.com

// Client secret
// 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