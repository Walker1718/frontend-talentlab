import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', redirectTo: '',
  },
  {
    path: 'index', redirectTo: '',
  },
  {
    path: 'starwars', component: StarwarsComponent,
  },
  {
    path: 'alumnos', component: AlumnosComponent,
  },
  {
    path: 'nosotros', component: NosotrosComponent,
  },
  {
    path: '404', component: Page404Component,
  },
  {
    path: '**', redirectTo: '404',
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
