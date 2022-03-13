import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'curso-angular-multiplataforma-open-webinars-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'albums-web';

    constructor(private swUpdate: SwUpdate) {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.versionUpdates.subscribe(() => {
                if (
                    confirm(
                        'Existe una nueva actualización, ¿desea instalar dicha versión?'
                    )
                ) {
                    window.location.reload();
                }
            });
        }
    }
}
