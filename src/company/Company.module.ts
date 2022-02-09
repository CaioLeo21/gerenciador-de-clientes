import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeleteCompanyController } from './controllers/DeleteCompany.controller';
import { SaveCompanyController } from './controllers/SaveCompany.controller';
import { UpdateCompanyController } from './controllers/UpdateCompany.controller';
import { CompanyRepository } from './repository/CompanyRepository';
import { SaveCompanyRepository } from './repository/SaveCompanyRepository';
import { UpdateCompanyRepository } from './repository/UpdateCompanyRepository';
import { DeleteCompany } from './services/DeleteCompany.service';
import { SaveCompany } from './services/SaveCompany.service';
import { UpdateCompany } from './services/UpdateCompany.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        CompanyRepository,
        SaveCompanyRepository,
        UpdateCompanyRepository
    ])
  ],
  controllers: [
      SaveCompanyController,
      UpdateCompanyController,
      DeleteCompanyController,
    ],
  providers: [
      SaveCompany,
      UpdateCompany,
      DeleteCompany,
  ],
  exports:[
      
  ]
})
export class CompanyModule {}
