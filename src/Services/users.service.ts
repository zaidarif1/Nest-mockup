import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/User.dto';
import { Users } from 'src/TypeOrm';
import { encodePass } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  // getHelloUsers(): string {
  //   return 'Hello User!';
  // }

  getHello(): string {
    return 'Hello World!';
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findAllsp(): Promise<Users[]> {
    return this.usersRepository.query("call get_students");
  }

  findOne(name: string): Promise<Users> {
    return this.usersRepository.findOneBy({ name });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  createUser(CreateUserDTO: CreateUserDTO) {
    // const password = encodePass(CreateUserDTO.password);
    const password = CreateUserDTO.password;
    const newStudent = this.usersRepository.create({ ...CreateUserDTO, password });
    return this.usersRepository.save(newStudent);
  }

  createUsersp(CreateUserDTO: CreateUserDTO) {
    this.usersRepository.query(`call add_student2("${CreateUserDTO.name}", ${CreateUserDTO.password})`);
  }
  
}
