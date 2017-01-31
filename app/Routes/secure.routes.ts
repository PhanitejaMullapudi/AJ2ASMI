import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../Components/Home/home.component';

export const SECURE_ROUTES: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
];