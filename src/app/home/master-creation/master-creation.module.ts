import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterCreationComponent } from './master-creation.component';
import { MasterCreationRoutingModule } from './master-creation.routing';
import { CounterCreationComponent } from './counter-creation/counter-creation.component';
import { PurityCreationComponent } from './purity-creation/purity-creation.component';
import { RateCreationComponent } from './rate-creation/rate-creation.component';

@NgModule({
    imports:[
        MasterCreationRoutingModule,
        FormsModule
    ],
    declarations: [ 
        MasterCreationComponent,
        CounterCreationComponent,
        PurityCreationComponent,
        RateCreationComponent
    ],
    providers: [
        
    ],
    exports: [ MasterCreationComponent ]
})

export class MasterCreationModule {}