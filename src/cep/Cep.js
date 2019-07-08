import * as nunjucks from 'nunjucks';
import axios from 'axios';

const apiUrl = 'https://viacep.com.br/ws/{{cep}}/json/';

export default class Cep {
    static async searchCep(cep) {

        Cep.validateCep(cep);

        const searchUrl = nunjucks.renderString(apiUrl, { cep });
        const result = await axios.get(searchUrl);
        if (result.data && !result.data.erro && result.status === 200) { // TODO change to HttpStatus.OK
            return result.data;
        } else if (result.data && result.data.erro){
            throw new Error('Cep inválido');
        } else {
            throw new Error('Erro ao consultar CEP');
        }
    }

    static formatCep(cep) {
        if (cep) {
            return JSON.stringify(cep);
        } else {
            return 'Sem resultado!';
        }
    }

    static validateCep(cep) {
        if (cep) {
            const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
            if (!cepRegex.test(cep)) {
                throw new Error('Cep inválido');
            }
        } else {
            throw new Error('Campo cep está vazio');
        }
    }
}