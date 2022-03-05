import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { Album } from '../interfaces';

@Injectable()
export class AlbumService {
    private headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }

    public getAlbums(): Observable<Album[]> {
        return this.httpClient.get<Album[]>(`${API_URL}/albums`, {
            headers: this.headers,
        });
    }

    public getAlbum(id: number): Observable<Album> {
        return this.httpClient.get<Album>(`${API_URL}/album/${id}`, {
            headers: this.headers,
        });
    }
}
