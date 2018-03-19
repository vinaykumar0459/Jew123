import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatedListComponent } from './created-list.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { ItemsComponent } from './items/items.component';
import { MastersComponent } from './masters/masters.component';
import { WastageComponent } from './wastage/wastage.component';

const CreatedListRoutes: Routes = [
    { path: '', component: CreatedListComponent, 
    children: [
        { path: '', redirectTo: 'company-creation', pathMatch: 'full' },
        { path: 'human-resources', component: HumanResourcesComponent },
        { path: 'items', component: ItemsComponent },
        { path: 'masters', component: MastersComponent},
        { path: 'wastage', component: WastageComponent}
    ]
  }
  ];
  
  @NgModule ( {
    imports : [ RouterModule.forChild ( CreatedListRoutes) ],
    exports : [ RouterModule ],
  } )
  
  export class CreatedListRoutingModule {
  }