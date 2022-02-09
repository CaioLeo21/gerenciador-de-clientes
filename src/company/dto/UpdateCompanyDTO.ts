import { ApiProperty } from "@nestjs/swagger";

export class UpdateCompanyDTO {
    @ApiProperty()
    name?: string;
    
    @ApiProperty()
    phone?: string
    
    @ApiProperty()
    email?: string

    @ApiProperty()
    cnpj?: string

    @ApiProperty()
    address?: string

    @ApiProperty()
    district?: string

    @ApiProperty()
    number?: string

    @ApiProperty()
    zipCode?: string
}