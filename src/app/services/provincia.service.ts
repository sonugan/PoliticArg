import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProvinciaService {
    constructor(private http: Http) { 
    }

    getAll() {
        return this.http.get('assets/mocks/provincias.json')
            .map((res:Response) => res.json());
    }
}