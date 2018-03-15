import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EmployCreationComponent } from './home/human-resource/employ-creation/employ-creation.component';
import { PartyCreationComponent } from './home/human-resource/party-creation/party-creation.component';
import { CompanyCreationComponent } from './home/human-resource/company-creation/company-creation.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent, 
    children: [
      { path: '', component: CompanyCreationComponent },
      { path: 'employ-creation', component: EmployCreationComponent },
      { path: 'party-creation', component: PartyCreationComponent }
    ]
    },
    { path: '', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent}
  ];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);