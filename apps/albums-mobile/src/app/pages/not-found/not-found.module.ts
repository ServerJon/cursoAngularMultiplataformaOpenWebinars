import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, IonicModule, DashboardRoutingModule],
})
export class NotFoundModule {}
