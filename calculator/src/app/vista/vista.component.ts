import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  suma() {
    this.resultado = this.valor1 + this.valor2;
  }

  resta() {
    this.resultado = this.valor1 - this.valor2;
  }

  multiplicacion() {
    this.resultado = this.valor1 * this.valor2;
  }

  division() {
    if (this.valor2 !== 0) {
      this.resultado = this.valor1 / this.valor2;
    } else {
      alert("No se puede dividir por cero");
    }
  }

  potencia() {
    this.resultado = Math.pow(this.valor1, this.valor2);
  }

  borrar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }

  onCalcular(operacion: string) {
    switch (operacion) {
      case '+':
        this.suma();
        break;
      case '-':
        this.resta();
        break;
      case '*':
        this.multiplicacion();
        break;
      case '/':
        this.division();
        break;
      case '^':
        this.potencia();
        break;
      case 'CE':
        this.borrar();
        break;
    }
  }
}
