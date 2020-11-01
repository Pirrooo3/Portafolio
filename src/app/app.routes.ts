import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiniProjectsComponent } from './mini-projects/mini-projects.component'


export const APP_ROUTES: Route[] = [
  {path: 'Home', component: HomeComponent},
  {path: 'MiniProjects', component: MiniProjectsComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: '*', redirectTo: '/Home', pathMatch: 'full'},
];