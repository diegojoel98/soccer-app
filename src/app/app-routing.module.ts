import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { VideosComponent } from 'src/app/components/videos/videos.component';
import { CompetenciasComponent } from 'src/app/components/competencias/competencias.component';
import { VistaCompetenciasComponent } from 'src/app/components/vista-competencias/vista-competencias.component';
import { VistaEquipoComponent } from 'src/app/components/vista-equipo/vista-equipo.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'competencias', component: CompetenciasComponent },
  { path: 'competencia/:id', component: VistaCompetenciasComponent },
  { path: 'equipo/:id', component: VistaEquipoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
