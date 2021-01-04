import { Injectable } from '@angular/core';
import { UltimoPartidoInterface } from '../interfaces/ultimo-partido';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UltimoPartidoService {

  constructor(
    private _http: HttpClient
  ) { }

  ultimoPartido() {
    return this._http.get<UltimoPartidoInterface[]>('https://www.scorebat.com/video-api/v1/').map(res => res);;
  }


}
