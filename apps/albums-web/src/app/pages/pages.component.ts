import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { RouterService } from './../core/services';

@Component({
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit, OnDestroy {
    showHideSidenav: boolean;
    private destructor: ReplaySubject<void>;
    constructor(
        public _location: Location,
        private routerService: RouterService
    ) {
        this.showHideSidenav = true;
        this.destructor = new ReplaySubject<void>();
    }

    ngOnInit(): void {
        this.setRouter();
    }

    private setRouter(): void {
        this.routerService.routing$
            .pipe(takeUntil(this.destructor))
            .subscribe((router: string) => {
                if (router != '/') {
                    this.showHideSidenav =
                        router.replace('/', '') == 'dashboard' ? true : false;
                }
            });
    }

    async ngOnDestroy(): Promise<void> {
        this.destructor.next();
        this.destructor.complete();
    }
}
