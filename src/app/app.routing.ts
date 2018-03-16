import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { EmployCreationComponent } from './home/human-resource/employ-creation/employ-creation.component';
import { PartyCreationComponent } from './home/human-resource/party-creation/party-creation.component';
import { CompanyCreationComponent } from './home/human-resource/company-creation/company-creation.component';
import { MainGroupCreationComponent } from './home/item-creations/main-group-creation/main-group-creation.component';
import { SubGroupCreationComponent } from './home/item-creations/sub-group-creation/sub-group-creation.component';
import { ItemCreationComponent } from './home/item-creations/item-creation/item-creation.component';
import { SizeLengthCreationComponent } from './home/item-creations/size-length-creation/size-length-creation.component';
import { WastageMcCreationComponent } from './home/item-creations/wastage-mc-creation/wastage-mc-creation.component';
import { PurityCreationComponent } from './home/master-creation/purity-creation/purity-creation.component';
import { RateCreationComponent } from './home/master-creation/rate-creation/rate-creation.component';
import { CounterCreationComponent } from './home/master-creation/counter-creation/counter-creation.component';

const appRoutes: Routes = [
    { path: 'home', component: HomepageComponent, 
    children: [
      { path: '', redirectTo: 'company-creation', pathMatch: 'full' },
      { path: 'company-creation', component: CompanyCreationComponent },
      { path: 'employ-creation', component: EmployCreationComponent },
      { path: 'party-creation', component: PartyCreationComponent },
      { path: 'main-group-creation', component: MainGroupCreationComponent },
      { path: 'sub-group-creation', component: SubGroupCreationComponent },
      { path: 'item-creation', component: ItemCreationComponent },
      { path: 'size-length-creation', component: SizeLengthCreationComponent },
      { path: 'wastage-mc-creation', component: WastageMcCreationComponent },
      { path: 'purity-creation', component: PurityCreationComponent },
      { path: 'rate-creation', component: RateCreationComponent },
      { path: 'counter-creation', component: CounterCreationComponent }
    ]
    },
    { path: '', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent}
  ];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);