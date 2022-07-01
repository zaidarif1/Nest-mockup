import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: "user_id",
    }) id: number

    @Column({
        unique: true,
        nullable: false,
        default: "",
    }) name: string

    @Column({
        nullable: false,
        default: 0,
    }) password: string

    @Column({
        nullable: false,
        default: "user",
    }) role: string
}