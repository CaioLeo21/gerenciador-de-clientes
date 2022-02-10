import axios from "axios";
import { ServiceCommand } from "src/interfaces/ServiceCommand";

export class CNPJValidation implements ServiceCommand {
    async execute(cnpj: string): Promise<boolean> {
        if(cnpj != ""){
            let response = '';

            await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`)
            .then((result) => {
                response = result.data.status;
            })
            .catch((error) => console.log("Erro ao consultar o CNPJ!", error));
            
            if(response != 'OK') return false;
            else return true;
        }else{
            return true;
        };
    };
};