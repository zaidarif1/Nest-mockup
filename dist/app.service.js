"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const TypeOrm_1 = require("./TypeOrm");
let AppService = class AppService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    findAll() {
        return this.usersRepository.find();
    }
    findAllsp() {
        return this.usersRepository.query("call get_students");
    }
    findOne(id) {
        return this.usersRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
    createStudent(CreateStudentDTO) {
        const newStudent = this.usersRepository.create(CreateStudentDTO);
        return this.usersRepository.save(newStudent);
    }
    createStudentsp(CreateStudentDTO) {
        this.usersRepository.query(`call add_student2("${CreateStudentDTO.name}", ${CreateStudentDTO.marks})`);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(TypeOrm_1.Class2)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map