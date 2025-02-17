import { Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { Parte2Component } from './parte2/parte2.component';

export const routes: Routes = [
    { path: '', component: PruebaComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: 'parte2', component: Parte2Component },
];
