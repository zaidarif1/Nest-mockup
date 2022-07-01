import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateStudentDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    marks: number
}