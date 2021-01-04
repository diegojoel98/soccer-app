import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UltimoPartidoComponent } from './components/ultimo-partido/ultimo-partido.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosComponent } from './components/videos/videos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VistaCompetenciasComponent } from './components/vista-competencias/vista-competencias.component';
import { VistaEquipoComponent } from './components/vista-equipo/vista-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    UltimoPartidoComponent,
    CompetenciasComponent,
    FooterComponent,
    NavbarComponent,
    VideosComponent,
    InicioComponent,
    PageNotFoundComponent,
    VistaCompetenciasComponent,
    VistaEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
