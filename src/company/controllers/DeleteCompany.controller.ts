import { Controller, Delete, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ControllerCommand } from "src/interfaces/ControllerCommand";
import { DeleteCompany } from "../services/DeleteCompany.service";

@ApiTags('Company')
@Controller('api/company/:id_company')
export class DeleteCompanyController implements ControllerCommand {
    constructor(
        private deleteCompany: DeleteCompany
    ){};
    
    @Delete()   
    @ApiOperation({ summary: "Deletar uma empresa" })
    @ApiResponse({ status: 200, description: "Emprersa deletada com sucesso!"})
    @ApiResponse({ status: 404, description: "Empresa não cadastrada!"})
    @ApiResponse({ status: 500, description: "Erro no servidor!"})
    async handle(@Param('id_company') id_company: number): Promise<any> {
        return await this.deleteCompany.execute(id_company);
    };
};