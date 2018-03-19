import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HumanResourceComponent } from './human-resource.component';
import { HumanResourceRoutingModule } from './human-resource.routing';
import { EmployCreationComponent } from './employ-creation/employ-creation.component';
import { PartyCreationComponent } from './party-creation/party-creation.component';
import { CompanyCreationComponent } from './company-creation/company-creation.component';

@NgModule({
    imports:[
        HumanResourceRoutingModule,
        FormsModule
    ],
    declarations: [ 
        HumanResourceComponent,
        EmployCreationComponent,
        PartyCreationComponent,
        CompanyCreationComponent
    ],
    providers: [
        
    ],
    exports: [ HumanResourceComponent ]
})

export class HumarResourceModule {}