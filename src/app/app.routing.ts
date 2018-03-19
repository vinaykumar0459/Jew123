import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const appRoutes: Routes = [ {path:''  ,pathMatch:'full', redirectTo:'login'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
    loadChildren: './home/home.module#HomeModule'
  }
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// @NgModule ( {
//   imports : [ RouterModule.forChild ( appRoutes) ],
//   exports : [ RouterModule ],
// } )

// export class HomeRoutingModule {
// }