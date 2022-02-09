import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { SaveCompanyDTO } from "../dto/SaveCompanyDTO";
import { Company } from "../entity/Company.entity";
import { SaveCompanyRepository } from "../repository/SaveCompanyRepository";

export class SaveCompany implements ServiceCommand {
    constructor(
        @InjectRepository(SaveCompanyRepository)
        private saveCompanyRepository: SaveCompanyRepository
    ){};

    async execute(companyDTO : SaveCompanyDTO): Promise<Company> {
        return await this.saveCompanyRepository.execute(companyDTO);
    };
};