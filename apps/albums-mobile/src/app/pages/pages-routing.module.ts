import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then(
                        m => m.DashboardModule
                    ),
            },
            {
                path: 'details/:id',
                loadChildren: () =>
                    import('./details/details.module').then(
                        m => m.DetailsModule
                    ),
            },
            {
                path: 'not-found',
                loadChildren: () =>
                    import('./not-found/not-found.module').then(
                        m => m.NotFoundModule
                    ),
            },

            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
