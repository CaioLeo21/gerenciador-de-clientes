import { InternalServerErrorException } from "@nestjs/common";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { EntityRepository, Repository } from "typeorm";
import { UpdateCompanyDTO } from "../dto/UpdateCompanyDTO";
import { Company } from "../entity/Company.entity";

@EntityRepository(Company)
export class UpdateCompanyRepository extends Repository<Company> implements ServiceCommand {
    async execute(companyDTO: UpdateCompanyDTO, id_company: number): Promise<Company> {
        const { name, phone, email, cnpj, address, district, number, zipCode } = companyDTO;

        const company = this.create();

        if (name) company.name = name;
        if (phone) company.phone = phone;
        if (email) company.email = email;
        if (cnpj) company.cnpj = cnpj;
        if (address) company.address = address;
        if (district) company.district = district;
        if (number) company.number = number;
        if (zipCode) company.zipCode = zipCode;

        company.id_company = id_company;

        try {
            await company.save();

            return company;
        } catch (error) {
            throw new InternalServerErrorException('Erro no servidor', error)
        }
    }
    
}