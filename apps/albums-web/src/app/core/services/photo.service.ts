import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { Photo } from '../interfaces';

@Injectable()
export class PhotoService {
    private headers: HttpHeaders;
    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
    }

    public getPhotosByAlbum(id: number): Observable<Photo[]> {
        let params = new HttpParams();
        params = params.append('albumId', id);
        params = params.append('_limit', 10);

        return this.httpClient.get<Photo[]>(`${API_URL}/photos`, {
            headers: this.headers,
            params,
        });
    }
}
