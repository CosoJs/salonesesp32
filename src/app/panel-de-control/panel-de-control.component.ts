import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule si lo necesitas
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-panel-de-control',
  standalone: true, 
  imports: [CommonModule, FormsModule], // Asegurar que CommonModule esté importado
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent {
  salones: string[] = ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10'];
  estadoPuerta: string = 'Cerrada';

  constructor(private firebaseService: FirebaseService) {}

  agregarSenales() {
    console.log('📌 Se ha agregado una señal');
  }

  setEstadoPuerta(estado: string) {
    this.estadoPuerta = estado;
    console.log(`🚪 Estado de la puerta: ${estado}`);
  }

  subirAFirebase() {
    const datos = {
      salon: this.salones[0],
      estadoPuerta: this.estadoPuerta
    };

    this.firebaseService.sendMessage(JSON.stringify(datos))
      .then(() => console.log('✅ Datos enviados a Firebase'))
      .catch(error => console.error('❌ Error al enviar a Firebase:', error));
  }
}
