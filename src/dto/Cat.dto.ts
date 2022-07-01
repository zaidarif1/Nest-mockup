import { isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateCatDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    color: string;
}