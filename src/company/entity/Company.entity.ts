import { Client } from 'src/client/entity/Client.entity';
import { User } from 'src/user/entity/User.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_company: number;

    @Column()
    name: string;
    
    @Column()
    phone: string;
    
    @Column()
    email: string

    // SE FOR UNIQUE, TEM QUE TER VALOR, MAS NEM TODA EMPRESA TEM CNPJ
    @Column({ nullable: true })
    cnpj: string

    @Column({ nullable: true })
    address: string
    
    @Column({ nullable: true })
    district: string

    @Column({ nullable: true })
    number: string

    @Column({ nullable: true })
    zipCode: string

    @OneToMany( () => Client, client => client.company )
    client: Client[]

    @OneToMany( () => User, user => user.company )
    user: User[]
}