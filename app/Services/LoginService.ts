import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    private loggedIn = false;
    serviceUrl: string = "http://localhost:51733/";

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    AuthenticateUser(email: string, password: string): Observable<any> {
        let authUrl = this.serviceUrl + "oauth2/token";

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        headers.append('Audience', 'Any');
        headers.append('Accept', 'application/json');
        headers.append('Accept-Language', 'en-gb');
        headers.append('grant_type', 'password');
        let urlSearchParams = new URLSearchParams();

        urlSearchParams.append('username', email);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');
        let body = urlSearchParams.toString()



        let options = new RequestOptions({ headers: headers });

        return this.http.post(authUrl, body, options).map(
            resp => {
                if (resp.json().access_token) {
                    let res = resp.json();
                    localStorage.setItem("access_token", res.access_token)
                    return true;
                }
                else
                return false;
            })
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}