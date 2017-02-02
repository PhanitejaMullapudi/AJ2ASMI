import {Injectable} from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(protected router: Router) {}

     canActivate() {
        /*if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }*/
        // not logged in so redirect to login page
        //this.router.navigate(['/login']);
        return true;
    }
}