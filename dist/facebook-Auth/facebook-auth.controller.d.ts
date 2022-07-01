import { Request } from "express";
import { FacebookAuthService } from './facebook-auth.service';
export declare class FaceBookAuthController {
    private readonly facebookAuthService;
    constructor(facebookAuthService: FacebookAuthService);
    facebookLogin(): Promise<any>;
    facebookLoginRedirect(req: Request): Promise<any>;
}
