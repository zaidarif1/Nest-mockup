import { CreateUserDTO } from 'src/dto/User.dto';
import { Users } from 'src/TypeOrm';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    getHello(): string;
    findAll(): Promise<Users[]>;
    findAllsp(): Promise<Users[]>;
    findOne(name: string): Promise<Users>;
    remove(id: string): Promise<void>;
    createUser(CreateUserDTO: CreateUserDTO): Promise<Users>;
    createUsersp(CreateUserDTO: CreateUserDTO): void;
}
