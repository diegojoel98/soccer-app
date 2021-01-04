import { Component, OnInit } from '@angular/core';
import { CompetenciasService } from 'src/app/services/competencias.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EquipoInterface } from 'src/app/interfaces/equipo';

@Component({
  selector: 'app-vista-equipo',
  templateUrl: './vista-equipo.component.html',
  styleUrls: ['./vista-equipo.component.css'],
  providers: [CompetenciasService]
})
export class VistaEquipoComponent implements OnInit {

  public queryId: string;
  public resultadoEquipo: EquipoInterface


  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private competenciasService: CompetenciasService
  ) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe((params: ParamMap) => {
      this.queryId = params.get('id');
    })

    this.competenciasService.equipo(this.queryId).then((response) => {
      this.resultadoEquipo = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })


  }

}
