import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient){}
    getStatement() {
        return this.http.get('https://www.mocky.io/v2/5e9661c62f00006d000259cc');
        /*
        let statements = [
            { date: '18/11/2016', description: 'SAQUE ATM', number: 67210807400, situation: 'Pago', confirmationDate: '18/11/2016', bankData: 'NUBANK Ag 12 CC 0001231234', value: 128714.00 },
            { date: '18/11/2016', description: 'TED', number: 67210807400, situation: 'Pago', confirmationDate: '18/11/2017', bankData: 'BANCO ABCD S.A Ag 12 CC 0001231234', value: 714.00 },
            { date: '18/11/2016', description: 'DOC', number: 43210807400, situation: 'Pendente', confirmationDate: '13/12/2016', bankData: 'BANCO ABCD S.A Ag 12 CC 0001231234', value: 312.00 },
            { date: '18/11/2016', description: 'SAQUE ATM', number: 6120807400, situation: 'Pago', confirmationDate: '10/11/2016', bankData: 'BANCO ITAÚ Ag 12 CC 0001231234', value: 10.05 },
            { date: '18/11/2016', description: 'SAQUE ATM', number: 37210807400, situation: 'Pendente', confirmationDate: '18/11/2016', bankData: 'BANCO INTER Ag 12 CC 0001231234', value: 13.50 }
        ];
        return statements;
        */
    }
}