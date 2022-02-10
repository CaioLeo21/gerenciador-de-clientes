import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/interfaces/ControllerCommand";
import { SaveCompanyDTO } from "../dto/SaveCompanyDTO";
import { CompanyResponse } from "../interfaces/CompanyResponse";
import { SaveCompany } from "../services/SaveCompany.service";

@ApiTags('Company')
@Controller('api/company')
export class SaveCompanyController implements ControllerCommand {
    constructor(
        private saveCompany: SaveCompany
    ){}
    
    @Post()   
    @ApiOperation({ summary: "Cadastrar uma empresa" })
    @ApiResponse({ status: 200, description: "Emprersa cadastrada com sucesso!"})
    @ApiResponse({ status: 404, description: "Empresa não cadastrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Body() companyDTO: SaveCompanyDTO): Promise<CompanyResponse> {
        return await this.saveCompany.execute(companyDTO);
    }
}