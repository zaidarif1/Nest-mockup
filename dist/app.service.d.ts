import { Repository } from 'typeorm';
import { CreateStudentDTO } from './dto/Student.dto';
import { Class2 } from './TypeOrm';
export declare class AppService {
    private usersRepository;
    constructor(usersRepository: Repository<Class2>);
    getHello(): string;
    findAll(): Promise<Class2[]>;
    findAllsp(): Promise<Class2[]>;
    findOne(id: number): Promise<Class2>;
    remove(id: string): Promise<void>;
    createStudent(CreateStudentDTO: CreateStudentDTO): Promise<Class2>;
    createStudentsp(CreateStudentDTO: CreateStudentDTO): void;
}
