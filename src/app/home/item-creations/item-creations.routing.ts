import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreationsComponent } from './item-creations.component';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { MainGroupCreationComponent } from './main-group-creation/main-group-creation.component';
import { SizeLengthCreationComponent } from './size-length-creation/size-length-creation.component';
import { SubGroupCreationComponent } from './sub-group-creation/sub-group-creation.component';
import { WastageMcCreationComponent } from './wastage-mc-creation/wastage-mc-creation.component';

const ItemCreationsRoutes: Routes = [
    { path: '', component: ItemCreationsComponent, 
    children: [
        { path: 'item-creation', component: ItemCreationComponent },
        { path: 'main-group-creation', component: MainGroupCreationComponent },
        { path: 'size-length-creation', component: SizeLengthCreationComponent},
        { path: 'sub-group-creation', component: SubGroupCreationComponent},
        { path: 'wastage-mc-creation', component: WastageMcCreationComponent}
    ]
  }
  ];
  
  @NgModule ( {
    imports : [ RouterModule.forChild ( ItemCreationsRoutes) ],
    exports : [ RouterModule ],
  } )
  
  export class ItemCreationsRoutingModule {
  }