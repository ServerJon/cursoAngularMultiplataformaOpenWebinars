import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoService } from '../../core/services';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailsMaterialModule } from './details-material.module';

@NgModule({
    declarations: [DetailsComponent],
    imports: [CommonModule, DetailsRoutingModule, DetailsMaterialModule],
    providers: [PhotoService],
})
export class DetailsModule {}
