import { GoogleOauthService } from './google-oauth.service';
export declare class GoogleOauthController {
    private readonly googleOauthService;
    constructor(googleOauthService: GoogleOauthService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
