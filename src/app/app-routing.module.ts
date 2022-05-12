import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContadorComponent } from './contador/contador.component';
import { ListarComponent } from './heroes/listar/listar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:'calculadora', component: CalculadoraComponent},
  {path:'heroeListado', component: ListarComponent},
  {path:'menu', component: NavBarComponent},
  {path:'contador', component: ContadorComponent},
  {path: 'principal', component: PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
