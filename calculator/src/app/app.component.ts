import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaComponent } from './vista/vista.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VistaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
