import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookAuthService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from facebook'
    }

    return {
      message: 'User information from facebook',
      user: req.user
    }
  }
}