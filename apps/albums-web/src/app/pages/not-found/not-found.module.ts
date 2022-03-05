import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundMaterialModule } from './not-found-material.module';
import { DashboardRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, DashboardRoutingModule, NotFoundMaterialModule],
})
export class NotFoundModule {}
