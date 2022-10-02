import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.API_URL;
  episode!: Episode;
  episodeList!: Episode[];
  cast!: string[];
  private _refreshEpisode = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refreshEpisode() {
    return this._refreshEpisode;
  }

  //metodo para obtener los primeros 20 resultados de busqueda
  getDataList(data: any): Observable<any>{
    let resource = data.resource
    let query = data.query
    return this.http.get(`${this.baseUrl}/${resource}/?name=${query}`)
  }

  //metodo para obtener un solo resultado
  getData(url: string): Observable<any>{
    return this.http.get(url);
  }

}
