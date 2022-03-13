import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Album } from '@typescript-common/interfaces';
import { AlbumService } from '@data/services';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
    columnas: string[];
    datos: MatTableDataSource<Album>;
    albums: Album[];
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    private destructor: ReplaySubject<void>;

    constructor(private albumService: AlbumService) {
        this.columnas = ['id', 'title'];
        this.datos = new MatTableDataSource<Album>();
        this.albums = [];
        this.destructor = new ReplaySubject<void>();
    }

    ngOnInit(): void {
        this.cargarAlbums();
    }

    ngAfterViewInit(): void {
        this.datos.paginator = this.paginator;
    }

    private cargarAlbums(): void {
        this.albumService
            .getAlbums()
            .pipe(takeUntil(this.destructor))
            .subscribe({
                next: (respuesta: Album[]) => {
                    this.albums = [...respuesta];

                    this.datos.data = this.albums;
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
