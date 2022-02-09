import { EntityRepository, Repository } from "typeorm";
import { Company } from "../entity/Company.entity";

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company>{
    
}