import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [MatTableModule, MatPaginatorModule, MatRippleModule],
    exports: [MatTableModule, MatPaginatorModule, MatRippleModule],
})
export class DashboardMaterialModule {}
