import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemCreationsComponent } from './item-creations.component';
import { ItemCreationsRoutingModule } from './item-creations.routing';
import { ItemCreationComponent } from './item-creation/item-creation.component';
import { MainGroupCreationComponent } from './main-group-creation/main-group-creation.component';
import { SizeLengthCreationComponent } from './size-length-creation/size-length-creation.component';
import { SubGroupCreationComponent } from './sub-group-creation/sub-group-creation.component';
import { WastageMcCreationComponent } from './wastage-mc-creation/wastage-mc-creation.component';

@NgModule({
    imports:[
        ItemCreationsRoutingModule,
        FormsModule
    ],
    declarations: [ 
        ItemCreationsComponent,
        ItemCreationComponent,
        MainGroupCreationComponent,
        SizeLengthCreationComponent,
        SubGroupCreationComponent,
        WastageMcCreationComponent
    ],
    providers: [
        
    ],
    exports: [ ItemCreationsComponent ]
})

export class ItemCreationsModule {}