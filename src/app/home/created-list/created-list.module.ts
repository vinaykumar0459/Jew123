import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreatedListRoutingModule } from './created-list.routing';
import { CreatedListComponent } from './created-list.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { ItemsComponent } from './items/items.component';
import { MastersComponent } from './masters/masters.component';
import { WastageComponent } from './wastage/wastage.component';

@NgModule({
    imports:[
        CreatedListRoutingModule,
        FormsModule
    ],
    declarations: [ 
        CreatedListComponent,
        ItemsComponent,
        HumanResourcesComponent,
        MastersComponent,
        WastageComponent
    ],
    providers: [
        
    ],
    exports: [ CreatedListComponent ]
})

export class CreatedListModule {}