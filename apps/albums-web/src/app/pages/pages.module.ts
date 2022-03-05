import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AlbumService } from '../core/services';
import { MaterialModule } from './material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MaterialModule,
        HttpClientModule,
    ],
    providers: [AlbumService],
})
export class PagesModule {}
