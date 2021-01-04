import { Component, OnInit } from '@angular/core';
import { CompetenciasInterface } from 'src/app/interfaces/competencias';
import { CompeticionInterface } from 'src/app/interfaces/competicion';
import { EquiposInterface } from 'src/app/interfaces/equipos';
import { TablaInterface } from 'src/app/interfaces/tabla';
import { PartidosCompetenciaInterface } from 'src/app/interfaces/partidos-competencia';
import { GoleadoresInterface } from 'src/app/interfaces/goleadores';
import { PartidosMundialInterface } from 'src/app/interfaces/partidos-mundial';

import { MatchdayInterface } from 'src/app/interfaces/matchday';

import { CompetenciasService } from 'src/app/services/competencias.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { collectExternalReferences } from '@angular/compiler';

declare var matchday: number;

@Component({
  selector: 'app-vista-competencias',
  templateUrl: './vista-competencias.component.html',
  styleUrls: ['./vista-competencias.component.css'],
  providers: [CompetenciasService]
})
export class VistaCompetenciasComponent implements OnInit {

  public resultadoCompeticion: CompeticionInterface
  public resultadoEquipos: EquiposInterface
  public resultadoTabla: TablaInterface
  public resultadoPartidos: PartidosCompetenciaInterface
  public resultadoGoleadores: GoleadoresInterface
  public resultadoMundial: PartidosMundialInterface

  public resultadoMatchday: MatchdayInterface

  public queryId: string;
  public matchday: number;


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private competenciasService: CompetenciasService
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.queryId = params.get('id');
    })

    this.competenciasService.competencia(this.queryId).then((response) => {
      this.resultadoCompeticion = response;

      this.matchday = this.resultadoCompeticion.currentSeason.currentMatchday;

      this.competenciasService.matchday(this.queryId, this.matchday).then((response) => {
        this.resultadoMatchday = response;
      }, (error) => {
        alert("Error: " + error.statusText)
      })

    }, (error) => {
      alert("Error: " + error.statusText)
    })


    this.competenciasService.equipos(this.queryId).then((response) => {
      this.resultadoEquipos = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this.competenciasService.tabla(this.queryId).then((response) => {
      this.resultadoTabla = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this.competenciasService.partidos(this.queryId).then((response) => {
      this.resultadoPartidos = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this.competenciasService.goleadores(this.queryId).then((response) => {
      this.resultadoGoleadores = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })

    this.competenciasService.partidosMundial(this.queryId).then((response) => {
      this.resultadoMundial = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })




  }

}
