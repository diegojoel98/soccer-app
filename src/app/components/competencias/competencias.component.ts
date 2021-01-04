import { Component, OnInit } from '@angular/core';
import { CompetenciasService } from 'src/app/services/competencias.service';
import { CompetenciasInterface } from 'src/app/interfaces/competencias';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  providers: [CompetenciasService],
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  public resultado: CompetenciasInterface;

  constructor(
    private competenciasService: CompetenciasService
  ) { }

  ngOnInit(): void {

    this.competenciasService.competencias()
      .subscribe(
        data => {
          this.resultado = data;
        },
        error => console.log(error)
      );

  }

}
