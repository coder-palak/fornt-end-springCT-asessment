import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})


export class BaseService {
    URL = environment.BASE_URL;
    constructor(private http: HttpClient) { }
    getUsers(): Observable<any> {

        return this.http.get(`${this.URL}/users`);
    }

    getUserList(): Observable<any> {
        return this.http.get(`${this.URL}/users/userlist`);
    }
    getCompanyList(): Observable<any> {

        return this.http.get(`${this.URL}/company`);
    }
    assisgnUser(companyId,userId):Observable<any> {
        let obj = {
            userId: userId,
            companyId: companyId
        }
        return this.http.post(`${this.URL}/company`,obj);
    }
}