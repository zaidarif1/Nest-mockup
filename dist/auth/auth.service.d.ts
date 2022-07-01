import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/Services/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<any>;
}
