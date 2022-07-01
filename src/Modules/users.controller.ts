import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/User.dto';
import { UsersService } from 'src/Services/users.service';


@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getHelloUsers(): string {
  //   return this.usersService.getHelloUsers();
  // }

  @Get()
  getUsers(): any {
    return this.usersService.findAll();
  }

  // @Post("create")
  // @UsePipes(ValidationPipe)
  // createStudent(@Body() CreateStudentDTO: CreateStudentDTO) {
  //   this.appService.createStudent(CreateStudentDTO)
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() CreateUserDTO: CreateUserDTO) {
    return this.usersService.createUser(CreateUserDTO)
  }
}
