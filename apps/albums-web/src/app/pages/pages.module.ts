import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AlbumService } from '@data/services';
import { MaterialModule } from './material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

import { RouterService } from '@data/services';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [AlbumService, RouterService],
})
export class PagesModule {}
