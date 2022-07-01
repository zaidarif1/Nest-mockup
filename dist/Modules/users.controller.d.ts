import { CreateUserDTO } from 'src/dto/User.dto';
import { UsersService } from 'src/Services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): any;
    createUser(CreateUserDTO: CreateUserDTO): Promise<import("../TypeOrm").Users>;
}
