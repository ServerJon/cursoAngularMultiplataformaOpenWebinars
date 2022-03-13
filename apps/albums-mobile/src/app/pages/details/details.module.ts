import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { PhotoService } from '@data/services';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
    declarations: [DetailsComponent],
    imports: [CommonModule, IonicModule, DetailsRoutingModule],
    providers: [PhotoService],
})
export class DetailsModule {}
