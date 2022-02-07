import { Company } from "src/company/entity/Company.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_user: number

    @Column()
    name_user: string

    @Column()
    username: string

    @Column()
    password_user: string

    @ManyToOne( () => Company, company => company.client )
    company: Company 
}