import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterCreationComponent } from './master-creation.component';
import { CounterCreationComponent } from './counter-creation/counter-creation.component';
import { PurityCreationComponent } from './purity-creation/purity-creation.component';
import { RateCreationComponent } from './rate-creation/rate-creation.component';

const MasterCreationRoutes: Routes = [
    { path: '', component: MasterCreationComponent, 
    children: [
        { path: '', redirectTo: 'company-creation', pathMatch: 'full' },
        { path: 'counter-creation', component: CounterCreationComponent },
        { path: 'purity-creation', component: PurityCreationComponent },
        { path: 'rate-creation', component: RateCreationComponent}
    ]
  }
  ];
  
  @NgModule ( {
    imports : [ RouterModule.forChild ( MasterCreationRoutes) ],
    exports : [ RouterModule ],
  } )
  
  export class MasterCreationRoutingModule {
  }