import { Body, Controller, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/interfaces/ControllerCommand";
import { UpdateCompanyDTO } from "../dto/UpdateCompanyDTO";
import { CompanyResponse } from "../interfaces/CompanyResponse";
import { UpdateCompany } from "../services/UpdateCompany.service";

@ApiTags('Company')
@Controller('api/company/:id_company')
export class UpdateCompanyController implements ControllerCommand {
    constructor(
        private updateCompany: UpdateCompany
    ){}
    
    @Put()
    @ApiOperation({ summary: "Atualizar as informações de uma empresa!" })
    @ApiResponse({ status: 201, description: "Dado(s) da empresa atualizado(s) com sucesso!"})
    @ApiResponse({ status: 500, description: "Erro com o servidor!"})
    async handle(@Body() companyDTO: UpdateCompanyDTO, @Param('id_company') id_company: number): Promise<CompanyResponse> {
        return await this.updateCompany.execute(companyDTO, id_company);
    }
}