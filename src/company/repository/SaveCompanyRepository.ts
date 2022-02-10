import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { SaveCompanyDTO } from "../dto/SaveCompanyDTO";
import { Company } from "../entity/Company.entity";
import { CNPJValidation } from "../utils/CNPJValidation.utils";
import { ZipCodeValidation } from "../utils/ZipCodeValidation.utils";

@EntityRepository(Company)
export class SaveCompanyRepository extends Repository<Company> implements ServiceCommand {
    async execute(companyDTO: SaveCompanyDTO): Promise<Company> {        
        const zipCodeValidation = new ZipCodeValidation();
        const cnpjValidation = new CNPJValidation();

        const { name, phone, cnpj, address, district, number, zipCode, email } = companyDTO;
        
        const company = this.create();

        const zipCodeValidated = await zipCodeValidation.execute(zipCode);
        const cnpjValidated = await cnpjValidation.execute(cnpj);

        if(zipCodeValidated && cnpjValidated){
            company.name = name;
            company.phone = phone;
            company.cnpj = cnpj;
            company.address = address;
            company.district = district;
            company.number = number;
            company.zipCode = zipCode;
            company.email = email;
        } else{
            throw new NotFoundException("CNPJ e/ou CEP inválido(s)!")
        };

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