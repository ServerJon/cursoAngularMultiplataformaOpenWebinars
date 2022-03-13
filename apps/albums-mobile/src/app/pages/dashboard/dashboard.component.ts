import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Album } from '@typescript-common/interfaces';
import { AlbumService } from '@data/services';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
    albums: Album[];
    private destructor: ReplaySubject<void>;

    constructor(private albumService: AlbumService) {
        this.albums = [];
        this.destructor = new ReplaySubject<void>();
    }

    ngOnInit(): void {
        this.cargarAlbums();
    }

    private cargarAlbums(): void {
        this.albumService
            .getAlbums()
            .pipe(takeUntil(this.destructor))
            .subscribe({
                next: (respuesta: Album[]) => {
                    this.albums = [...respuesta];
                },
                error: (err: Error) => {
                    console.error('Error al cargar los albums: ', err);
                },
            });
    }

    async ngOnDestroy(): Promise<void> {
        this.destructor.next();
        this.destructor.complete();
    }
}
