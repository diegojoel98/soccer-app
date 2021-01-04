import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CompetenciasInterface } from '../interfaces/competencias';
import { CompeticionInterface } from '../interfaces/competicion';
import { EquiposInterface } from '../interfaces/equipos';
import { TablaInterface } from '../interfaces/tabla';
import { PartidosCompetenciaInterface } from '../interfaces/partidos-competencia';
import { GoleadoresInterface } from '../interfaces/goleadores';
import { PartidosMundialInterface } from '../interfaces/partidos-mundial';
import { EquipoInterface } from '../interfaces/equipo';

import { MatchdayInterface } from '../interfaces/matchday';

@Injectable({
  providedIn: 'root'
})

export class CompetenciasService {

  // Token for accessing data on football-data.org (see: https://www.football-data.org/client/register)
  HEADERS = new HttpHeaders({ 'X-Auth-Token': '526ae10c45564c82a2e546fd0074e4d1' });
  // Convenience constant
  URL = 'https://api.football-data.org/v2/competitions/?plan=TIER_ONE';

  constructor(
    private _http: HttpClient
  ) { }

  competencias(): Observable<CompetenciasInterface> {
    return this._http.get(this.URL,
      { headers: this.HEADERS }).map(res => res as CompetenciasInterface);
  }

  cachedValues: Array<{ [query: string]: CompeticionInterface }> = [];
  competencia = (query: string): Promise<CompeticionInterface> => {
    let promise = new Promise<CompeticionInterface>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query, { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as CompeticionInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues2: Array<{ [query: string]: EquiposInterface }> = [];
  equipos = (query: string): Promise<EquiposInterface> => {
    let promise = new Promise<EquiposInterface>((resolve, reject) => {
      if (this.cachedValues2[query]) {
        resolve(this.cachedValues2[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query + '/teams', { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as EquiposInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues3: Array<{ [query: string]: TablaInterface }> = [];
  tabla = (query: string): Promise<TablaInterface> => {
    let promise = new Promise<TablaInterface>((resolve, reject) => {
      if (this.cachedValues3[query]) {
        resolve(this.cachedValues3[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query + '/standings', { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as TablaInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues4: Array<{ [query: string]: PartidosCompetenciaInterface }> = [];
  partidos = (query: string): Promise<PartidosCompetenciaInterface> => {
    let promise = new Promise<PartidosCompetenciaInterface>((resolve, reject) => {
      if (this.cachedValues4[query]) {
        resolve(this.cachedValues4[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query + '/matches?status=SCHEDULED', { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as PartidosCompetenciaInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues5: Array<{ [query: string]: GoleadoresInterface }> = [];
  goleadores = (query: string): Promise<GoleadoresInterface> => {
    let promise = new Promise<GoleadoresInterface>((resolve, reject) => {
      if (this.cachedValues5[query]) {
        resolve(this.cachedValues5[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query + '/scorers', { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as GoleadoresInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues6: Array<{ [query: string]: PartidosMundialInterface }> = [];
  partidosMundial = (query: string): Promise<PartidosMundialInterface> => {
    let promise = new Promise<PartidosMundialInterface>((resolve, reject) => {
      if (this.cachedValues6[query]) {
        resolve(this.cachedValues6[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query + '/matches', { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as PartidosMundialInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues7: Array<{ [query: string]: EquipoInterface }> = [];
  equipo = (query: string): Promise<EquipoInterface> => {
    let promise = new Promise<EquipoInterface>((resolve, reject) => {
      if (this.cachedValues7[query]) {
        resolve(this.cachedValues7[query])
      }
      else {
        this._http.get('https://api.football-data.org/v2/' + 'teams/' + query, { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as EquipoInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }

  cachedValues8: Array<{ [query: string]: MatchdayInterface }> = [];
  matchday = (query1: string, query: number): Promise<MatchdayInterface> => {
    let promise = new Promise<MatchdayInterface>((resolve, reject) => {
      if (this.cachedValues8[query]) {
        resolve(this.cachedValues8[query1])
      }
      else {
        this._http.get('https://api.football-data.org/v2/competitions/' + query1 + '/matches?matchday=' + query, { headers: this.HEADERS })
          .toPromise()
          .then((response) => {
            resolve(response as MatchdayInterface)
          },
            (error) => {
              reject(error);
            })
      }
    })
    return promise;
  }


}















/*cachedValues: Array<{ [query: string]: CompetenciasInterface }> = [];

constructor(
  private _http: HttpClient
) { }

competencias = (query: string): Promise<CompetenciasInterface> => {
  let promise = new Promise<CompetenciasInterface>((resolve, reject) => {
    if (this.cachedValues[query]) {
      resolve(this.cachedValues[query])
    }
    else {*/
/*const headerDict = {
  'Content-X-Auth-Token': '526ae10c45564c82a2e546fd0074e4d1',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Access-Control-Allow-Headers': 'Content-Type',
}
const requestOptions = {
  headers: new HttpHeaders(headerDict),
};*/
  //let headers = new HttpHeaders().set('Content-X-Auth-Token': '526ae10c45564c82a2e546fd0074e4d1');
/*this._http.get('https://api.football-data.org/v2/competitions?plan=TIER_ONE', {
  headers: {
    'Content-X-Auth-Token': '526ae10c45564c82a2e546fd0074e4d1',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": 'true',
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "X-Custom-Header"/*"X-API-KEY, X-Auth-Token, Content-Type, Origin, Engaged-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept, X-CSRF-TOKEN, Content-X-Auth-Token"*/
/*}
})
.toPromise()
.then((response) => {
  resolve(response as CompetenciasInterface)
},
  (error) => {
    reject(error);
  })
}
})
return promise;
}
}*/


