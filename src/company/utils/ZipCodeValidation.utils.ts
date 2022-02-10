import { ServiceCommand } from "src/interfaces/ServiceCommand";
import axios from "axios";

export class ZipCodeValidation implements ServiceCommand {
    async execute(zipCode: string): Promise<boolean> {
        if(zipCode != ""){
            let response = true;
            // let res = {};
            
            await axios.get(`http://viacep.com.br/ws/${zipCode}/json/`)
            .then((result) => {
                response = result.data.erro;
                // res = {
                //     zipCode: result.data.cep,
                //     address: result.data.logradouro,
                //     neighborhood: result.data.bairro,
                //     city: result.data.localidade,
                //     uf: result.data.uf
                // };
            })
            .catch((error) => console.log("Erro ao consultar o CEP!", error));
            
            if(response) return false;
            else return true;
        }else{
            return true
        };
    };
};