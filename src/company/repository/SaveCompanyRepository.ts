import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { SaveCompanyDTO } from "../dto/SaveCompanyDTO";
import { Company } from "../entity/Company.entity";

@EntityRepository(Company)
export class SaveCompanyRepository extends Repository<Company> implements ServiceCommand {
    async execute(companyDTO: SaveCompanyDTO): Promise<Company> {        
        const { name, phone, cnpj, address, district, number, zipCode, email } = companyDTO;

        const company = this.create();

        company.name = name;
        company.phone = phone;
        company.cnpj = cnpj;
        company.address = address;
        company.district = district;
        company.number = number;
        company.zipCode = zipCode;
        company.email = email;

        try {
            await company.save();

            return company;
        } catch (error) {
            if(error.code === '23505'){
                throw new ConflictException('Empresa já cadastrada!');
            }else{
                console.log(`Erro na inserção dos dados da empresa no banco de dados -> ${error}`);
                throw new InternalServerErrorException('Erro no servidor!');
            };
        };
    };
};