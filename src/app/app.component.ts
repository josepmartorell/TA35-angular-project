import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Partida de dados';

   valor1: number;
   valor2: number;
   valor3: number;
   resultado: string | undefined;
   advice: string | undefined;

   constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.advice = 'Siguiente jugada!'
   }

   retornarAleatorio() {
  //ITS IMPLEMENTATION
      return Math.trunc(Math.random() * 6) + 1;
    }

    tirar(){

      this.valor1 = this.retornarAleatorio();
      this.valor2 = this.retornarAleatorio();
      this.valor3 = this.retornarAleatorio();
      if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
        this.resultado = 'ganó';
        this.advice = 'Lucky Strike!';
      }else{
        this.resultado = 'perdió';
        this.advice = 'Vuelva a intarlo!'
      }
    }
   

}
