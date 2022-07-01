import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from './dto/Student.dto';
import { Class2 } from './TypeOrm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Class2)
    private usersRepository: Repository<Class2>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<Class2[]> {
    return this.usersRepository.find();
  }

  findAllsp(): Promise<Class2[]> {
    return this.usersRepository.query("call get_students");
  }

  findOne(id: number): Promise<Class2> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  createStudent(CreateStudentDTO: CreateStudentDTO) {
    const newStudent = this.usersRepository.create(CreateStudentDTO);
    return this.usersRepository.save(newStudent);
  }

  createStudentsp(CreateStudentDTO: CreateStudentDTO) {
    this.usersRepository.query(`call add_student2("${CreateStudentDTO.name}", ${CreateStudentDTO.marks})`);
  }
  
}
