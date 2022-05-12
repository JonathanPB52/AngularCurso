import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './heroes/listar/listar.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContadorComponent } from './contador/contador.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    HeroesComponent,
    HeroeComponent,
    CalculadoraComponent,
    NavBarComponent,
    PrincipalComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
