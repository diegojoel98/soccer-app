import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { CompetenciasService } from 'src/app/services/competencias.service';
import { CompetenciasInterface } from 'src/app/interfaces/competencias';

import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  providers: [CompetenciasService],
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent implements OnInit {

  public resultado: CompetenciasInterface;

  constructor(
    private competenciasService: CompetenciasService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {

    this.competenciasService.competencias()
      .subscribe(
        data => {
          this.resultado = data;
        },
        error => console.log(error)
      );

    this.initScrollAnimations();

  }

  initScrollAnimations(): void {
    gsap.from(this.document.querySelector('#title'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#title'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

}
