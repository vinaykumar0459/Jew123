import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HumanResourceComponent } from './human-resource.component';
import { HumanResourceRoutingModule } from './human-resource.routing';
import { EmployCreationComponent } from './employ-creation/employ-creation.component';
import { PartyCreationComponent } from './party-creation/party-creation.component';
import { CompanyCreationComponent } from './company-creation/company-creation.component';
import { CountryService } from './company-creation/shared/country-service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        HumanResourceRoutingModule,
        FormsModule,
        HttpModule,
        CommonModule
    ],
    declarations: [ 
        HumanResourceComponent,
        EmployCreationComponent,
        PartyCreationComponent,
        CompanyCreationComponent
    ],
    providers: [
        CountryService
    ],
    exports: [ HumanResourceComponent ]
})

export class HumarResourceModule {}