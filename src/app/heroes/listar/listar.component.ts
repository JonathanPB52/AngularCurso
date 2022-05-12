import { Component } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  
  heroes: HeroeComponent[] = [
    {
      nombre: "juan",
      edad: 21
    },
    {
      nombre: "Miguel",
      edad: 21
    },
    {
      nombre: "Antornio",
      edad: 21
    },
    {
      nombre: "Juliana",
      edad: 21
    },
    {
      nombre: "Geraldin",
      edad: 21
    }
  ];
  heroeBorrado: string = "";
  cantidad: number = 1;

  AgregarHeroe(nombre: string, edad: number) {
    const herComp = new HeroeComponent;
    herComp.nombre= nombre;
    herComp.edad=edad;
    this.heroes.push(herComp);
    console.table(this.heroes);
    alert("Heroe Creado exitosamente");
  }
  borrar(){
    this.heroeBorrado = this.heroes.shift()?.nombre || "";
    alert("Heroe Eliminado exitosamente");
  }
}
