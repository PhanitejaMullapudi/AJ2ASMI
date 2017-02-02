import {Injectable} from '@angular/core';
import { Headers, Http,Jsonp,URLSearchParams,Response } from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService{
    serviceUrl:string = "http://localhost:51733/";
    
}