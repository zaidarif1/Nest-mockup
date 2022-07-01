import { Body, Controller, Get, Post, Request, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CreateCatDTO } from './dto/Cat.dto';
import { CreateStudentDTO } from './dto/Student.dto';
import { Role } from './role.enum';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("students")
  getStudents(): any {
    return this.appService.findAllsp();
  }

  // @Post("create")
  // @UsePipes(ValidationPipe)
  // createStudent(@Body() CreateStudentDTO: CreateStudentDTO) {
  //   this.appService.createStudent(CreateStudentDTO)
  // }

  @Post("create")
  @UsePipes(ValidationPipe)
  createStudent(@Body() CreateStudentDTO: CreateStudentDTO) {
    this.appService.createStudentsp(CreateStudentDTO)
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post()
  @Roles(Role.Admin)
  create(@Body() createCatDto: CreateCatDTO) {
    return createCatDto;
  }
}
