import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './Layouts/public.component';
import { SecureComponent } from './Layouts/secure.component';
import { PUBLIC_ROUTES } from './Routes/public.routes';
import { SECURE_ROUTES } from './Routes/secure.routes';
import { UserGuard } from './userGuard';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full', },
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, canActivate: [UserGuard],  data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];