import { Component, OnInit } from '@angular/core';
import { UltimoPartidoService } from '../../services/ultimo-partido.service';
import { UltimoPartidoInterface } from '../../interfaces/ultimo-partido';

@Component({
  selector: 'app-ultimo-partido',
  templateUrl: './ultimo-partido.component.html',
  styleUrls: ['./ultimo-partido.component.css'],
  providers: [UltimoPartidoService]
})
export class UltimoPartidoComponent implements OnInit {

  public resultado: UltimoPartidoInterface[]

  constructor(
    private ultimoPartidoService: UltimoPartidoService
  ) { }

  ngOnInit(): void {
    this.ultimoPartidoService.ultimoPartido()
      .subscribe(
        data => {
          this.resultado = data;
          let s = this.resultado[0].embed;
          document.getElementById('videos').innerHTML = s;
        },
        error => console.log(error)
      );


  }

}
