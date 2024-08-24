
import { VistaComponent } from '../vista/vista.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acciones',
  standalone: true,
  imports: [VistaComponent, FormsModule ],
  templateUrl: './acciones.component.html',
  styleUrl: './acciones.component.css'
})
export class AccionesComponent {
  @Output() operacionSeleccionada = new EventEmitter<string>();

  onCalcular(operacion: string) {
    this.operacionSeleccionada.emit(operacion);
  }
}
