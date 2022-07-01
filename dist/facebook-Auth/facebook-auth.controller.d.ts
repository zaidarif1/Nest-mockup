import { FacebookAuthService } from './facebook-auth.service';
export declare class FaceBookAuthController {
    private readonly facebookAuthService;
    constructor(facebookAuthService: FacebookAuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No user from facebook" | {
        message: string;
        user: any;
    };
}
