import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-facebook';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {

  constructor() {
    super({
      clientID: "444048330581658",
      clientSecret: "19b89d2db7409577d710bba97e36a078",
      callbackURL: 'http://localhost:3000/google/redirect',
      scope: "email",
      profileFields: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
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