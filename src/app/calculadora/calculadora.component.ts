import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  //Calculadora
  num1!: number;
  num2!: number;
  rsp: number = 3;

  sumar(Num1: number, Num2: number){
    this.rsp = Num1+Num2;
    return this.rsp;
  }
  restar(){
    this.rsp = this.num1-this.num2;
    return this.rsp;
  }
  multiplicar(){
    this.rsp = this.num1*this.num2;
    return this.rsp;
  }
  dividir(){
    this.rsp = this.num1/this.num2;
    return this.rsp;
  }
}
