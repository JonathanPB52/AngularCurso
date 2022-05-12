import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

  //IncrementarDecrementarVariables
  base: number = 5;
  numero: number = 10;
  numIncDecre: number = 0;

  Incrementar(){
    this.numIncDecre = this.numero + this.base;
    this.numero = this.numIncDecre;
    return this.numero
  }

  Decrementar(){
    this.numIncDecre = this.numero - this.base;
    this.numero = this.numIncDecre;
    return this.numero
  }

}
