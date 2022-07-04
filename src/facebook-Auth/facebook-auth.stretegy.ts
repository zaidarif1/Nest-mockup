import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { Profile, Strategy } from 'passport-facebook';

config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {

  constructor() {
    super({
      clientID: "444048330581658",
      clientSecret: "19b89d2db7409577d710bba97e36a078",
      callbackURL: 'http://localhost:3000/facebook/redirect',
      scope: "email",
      profileFields: ['emails', 'name'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: Profile, done: any): Promise<any> {
    // console.log(request)
    const { name, emails } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}

// Your Client ID
// 954855165057-hh8lekff9h4m01o1jl1k41sic5dfnngl.apps.googleusercontent.com

// Client secret
// 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