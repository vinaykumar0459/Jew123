import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeRoutes: Routes = [
    {
      path : '',
      component : HomeComponent, 
      children: [
        {
            path : 'human-resource',
            loadChildren : './human-resource/human-resource.module#HumarResourceModule' 
          },
          {
            path : 'item-creations',
            loadChildren : './item-creations/item-creations.module#ItemCreationsModule' 
          },
          {
            path : 'master-creation',
            loadChildren : './master-creation/master-creation.module#MasterCreationModule' 
          },
          {
            path : 'created-list',
            loadChildren : './created-list/created-list.module#CreatedListModule' 
          }
      ]
    },
  ];
  
  @NgModule ( {
    imports : [ RouterModule.forChild ( HomeRoutes) ],
    exports : [ RouterModule ],
  } )
  
  export class HomeRoutingModule {
  }