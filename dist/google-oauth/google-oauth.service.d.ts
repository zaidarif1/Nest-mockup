export declare class GoogleOauthService {
    googleLogin(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
