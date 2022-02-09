import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { UpdateCompanyDTO } from "../dto/UpdateCompanyDTO";
import { Company } from "../entity/Company.entity";
import { UpdateCompanyRepository } from "../repository/UpdateCompanyRepository";

export class UpdateCompany implements ServiceCommand {
    constructor(
        @InjectRepository(UpdateCompanyRepository)
        private updateCompany: UpdateCompanyRepository
    ){};

    async execute(companyDTO: UpdateCompanyDTO, id_company: number): Promise<Company> {
        return await this.updateCompany.execute(companyDTO, id_company);
    };
};