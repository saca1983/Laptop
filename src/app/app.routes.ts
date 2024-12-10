import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SectionsComponent } from '../pages/sections/sections.component';
import { StateComponent } from '../pages/state/state.component';
import { PlanComponent } from '../pages/plan/plan.component';
import { RecoveryComponent } from '../pages/recovery/recovery.component';
import { AccountComponent } from '../pages/account/account.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sections', component: SectionsComponent},
    {path: 'state', component: StateComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'recovery', component: RecoveryComponent},
    {path: 'account', component: AccountComponent},
];
