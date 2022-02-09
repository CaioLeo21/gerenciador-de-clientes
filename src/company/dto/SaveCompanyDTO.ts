import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SaveCompanyDTO {
    @ApiProperty()
    id_company: number

    @ApiProperty()
    @IsNotEmpty({message: "Nome não informado!"})
    name: string;
    
    @ApiProperty()
    @IsNotEmpty({message: "Telefone não informado!"})
    phone: string
    
    @ApiProperty()
    @IsNotEmpty({message: "Email não informado!"})
    @IsEmail({message: "Email inválidp!"})
    email: string

    @ApiProperty()
    cnpj: string

    @ApiProperty()
    address: string

    @ApiProperty()
    district: string

    @ApiProperty()
    number: string

    @ApiProperty()
    zipCode: string
    
}