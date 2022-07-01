import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class2 {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: "user_id",
    }) id: number

    @Column({
        nullable: false,
        default: "",
    }) name: string

    @Column({
        nullable: false,
        default: 0,
    }) marks: number
}