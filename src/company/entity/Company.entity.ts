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
    cnpj: string

    @Column()
    email: string

    @OneToMany( () => Client, client => client.company )
    client: Client[]

    @OneToMany( () => User, user => user.company )
    user: User[]
}