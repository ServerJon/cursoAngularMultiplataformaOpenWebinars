import { Component } from '@angular/core';

@Component({
    selector: 'curso-angular-multiplataforma-open-webinars-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
    public labels = [
        {
            'title': 'Angular',
            'url': 'https://angular.io/'
        },
        {
            'title': 'Electron',
            'url': 'https://www.electronjs.org/'
        },
        {
            'title': 'Ionic',
            'url': 'https://ionicframework.com/'
        },
        {
            'title': 'Nativescript',
            'url': 'https://nativescript.org/'
        }
    ];
    
    constructor() {}
}
