import { ServiceCommand } from "src/interfaces/ServiceCommand";
import { Repository } from "typeorm";
import { Company } from "../entity/Company.entity";


export class saveCompany extends Repository<Company> implements ServiceCommand {
    
    
    async execute(): Promise<any> {
        
    }
}