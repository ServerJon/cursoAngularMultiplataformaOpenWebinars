import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Photo } from './../../core/interfaces';
import { PhotoService } from './../../core/services';

@Component({
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
    photos: Photo[];
    private destructor: ReplaySubject<void>;
    constructor(
        private photoService: PhotoService,
        private activatedRoute: ActivatedRoute
    ) {
        this.photos = [];
        this.destructor = new ReplaySubject<void>();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.getDetails(+params['id']);
        });
    }

    private getDetails(id: number): void {
        this.photoService
            .getPhotosByAlbum(id)
            .pipe(takeUntil(this.destructor))
            .subscribe({
                next: (respuesta: Photo[]) => {
                    this.photos = [...respuesta];
                },
                error: (error: Error) => {
                    console.error(
                        'Error al cargar las fotos del album: ',
                        error
                    );
                },
            });
    }

    async ngOnDestroy(): Promise<void> {
        this.destructor.next();
        this.destructor.complete();
    }
}
