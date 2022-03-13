import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AlbumService } from '@data/services';

import { IonicModule } from '@ionic/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        IonicModule,
        HttpClientModule,
    ],
    providers: [AlbumService],
})
export class PagesModule {}
