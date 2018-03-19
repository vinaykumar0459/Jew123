import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SidenavComponent } from '../shared/sidenav/sidenav.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
    imports:[
        HomeRoutingModule,
        FormsModule
    ],
    declarations: [ 
        HomeComponent,
        SidenavComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        
    ],
    exports: [ HomeComponent ]
})

export class HomeModule {}