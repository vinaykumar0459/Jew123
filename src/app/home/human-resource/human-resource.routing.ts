import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanResourceComponent } from './human-resource.component';
import { EmployCreationComponent } from './employ-creation/employ-creation.component';
import { PartyCreationComponent } from './party-creation/party-creation.component';
import { CompanyCreationComponent } from './company-creation/company-creation.component';

const HumanResourceRoutes: Routes = [
    { path: '', component: HumanResourceComponent, 
    children: [
        { path: '', redirectTo: 'company-creation', pathMatch: 'full' },
        { path: 'company-creation', component: CompanyCreationComponent },
        { path: 'party-creation', component: PartyCreationComponent },
        { path: 'employ-creation', component: EmployCreationComponent}
    ]
  }
  ];
  
  @NgModule ( {
    imports : [ RouterModule.forChild ( HumanResourceRoutes) ],
    exports : [ RouterModule ],
  } )
  
  export class HumanResourceRoutingModule {
  }