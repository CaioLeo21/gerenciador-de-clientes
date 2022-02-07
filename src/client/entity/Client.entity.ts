import { Company } from "src/company/entity/Company.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_client: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    cpf: string

    @Column()
    address: string

    @Column()
    district: string

    @Column()
    cep: string

    @Column()
    city: string

    @Column()
    uf: string

    @ManyToOne( () => Company, company => company.client )
    company: Company 
}