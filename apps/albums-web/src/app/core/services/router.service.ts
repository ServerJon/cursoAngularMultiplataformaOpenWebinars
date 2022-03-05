import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RouterService {
    private routing: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private destructor: Subject<void> = new Subject<void>();

    constructor(private router: Router) {
        this.setRouter();
    }

    public routing$: Observable<string> = this.routing.asObservable();

    public destroySubscribe(): void {
        this.destructor.next();
        this.destructor.complete();
    }

    /**
     * We subscribe to the router event and when we detect any change shoot the filter.
     *  - If the event is NavigationEnd event update the router nav information
     */
    private setRouter(): void {
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                ),
                takeUntil(this.destructor)
            )
            .subscribe((event: NavigationEnd) => {
                this.routing.next(event.url);
            });
    }
}
