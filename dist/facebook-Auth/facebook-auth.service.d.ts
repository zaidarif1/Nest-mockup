export declare class FacebookAuthService {
    facebookLogin(req: any): "No user from facebook" | {
        message: string;
        user: any;
    };
}
