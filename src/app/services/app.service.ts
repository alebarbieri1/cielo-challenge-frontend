import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient){}
    getStatement() {
        return this.http.get('https://cielo-challenge-backend.herokuapp.com/statement');
    }
}