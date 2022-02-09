import { InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { CompanyRepository } from "../repository/CompanyRepository";


export class DeleteCompany implements ServiceCommand {
    constructor(
        @InjectRepository(CompanyRepository)
        private companyRepository: CompanyRepository
    ){};

    async execute(id_company: number): Promise<any> {
        let companyByID = await this.companyRepository.findOne(id_company);
        
        if(companyByID != undefined){
            return await this.companyRepository.remove(companyByID);
        }else{
            throw new InternalServerErrorException('Empresa não encontrada!')
        }
    };
};