import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  standalone: true,
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css'
})
export class PruebaComponent {
  constructor(private router: Router) {}

  seleccionarSalon(nombre: string) {
    const idSalon = nombre.replace('.', '_'); // Convertir "1.2" en "1_2"
    localStorage.setItem('salonSeleccionado', idSalon);
    this.router.navigate(['/parte2']); // Ruta de la nueva página
  }
}
