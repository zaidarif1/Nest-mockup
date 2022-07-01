import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from "express";
import { FacebookAuthService } from './facebook-auth.service';

@Controller('facebook')
export class FaceBookAuthController {
  constructor(private readonly facebookAuthService: FacebookAuthService) {}

  @Get()
  @UseGuards(AuthGuard('facebook'))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req,
    };
  }
}