import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { CreateCatDTO } from './dto/Cat.dto';
import { CreateStudentDTO } from './dto/Student.dto';
export declare class AppController {
    private readonly appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    getStudents(): any;
    createStudent(CreateStudentDTO: CreateStudentDTO): void;
    login(req: any): Promise<any>;
    getProfile(req: any): any;
    create(createCatDto: CreateCatDTO): CreateCatDTO;
}
