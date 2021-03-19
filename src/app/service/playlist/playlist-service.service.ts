import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class PlaylistServiceService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<Playlist[]>{
  //   return this.http.get<Playlist[]>(API_URL + '/playlists');
  // }
  /** GET: all playlist */
  getAll(page: number , size: number, sort: string): Observable<any>{
    return this.http.get( `${API_URL}/playlists?page=${page}&size=${size}&sort=${sort}`);
  }

  /** GET: all my playlist */
  getAllMyPlaylists(page: number, size: number, id: number, sort: string): Observable<any>{
    return this.http.get(`${API_URL}/playlists/user/${id}?page=${page}&size=${size}&sort=${sort}`);
  }

  /** GET: all my playlist by name */
  getAllMyPlaylistsByName(page: number, size: number, id: number, sort: string, name: string): Observable<any>{
    return this.http.get(`${API_URL}/playlists/search/${id}?page=${page}&size=${size}&sort=${sort}&name=${name}`);
  }
}
