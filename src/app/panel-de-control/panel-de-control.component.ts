import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Database, set, ref } from '@angular/fire/database';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-panel-de-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent {
  salones: string[] = ['1.1', '1.2', '1.3'];
  estadoPuerta: string = 'Cerrada';
  nuevoSalon: string = ''; // Variable para el nuevo salón ingresado
  mostrarModal: boolean = false;
  textoModal: string = '';
  senalActual: number | null = null;

  constructor(private database: Database) {}

  setEstadoPuerta(estado: string) {
    this.estadoPuerta = estado;
    console.log(`🚪 Estado de la puerta: ${estado}`);
  }

  async subirAFirebaseSalones() {
    const ultimoSalon = this.salones[this.salones.length - 1];
    const datos = {
      luces: 0,
      pizarron: 0,
      puertas: 0,
      clima: 0,
      codigoDelClima: ['', ''] // Dos strings vacíos
    };
  
    // Reemplazar el punto por un guion bajo para que sea un nombre de ruta válido
    const salonId = this.nuevoSalon.replace('.', '_');
  
    try {
      await set(ref(this.database, `salones/${salonId}`), datos);
      console.log(`✅ Datos del salón ${salonId} enviados a Firebase`);
    } catch (error) {
      console.error('❌ Error al enviar a Firebase:', error);
    }
  }

  async subirAFirebase() {
    const ultimoSalon = this.salones[this.salones.length - 1];
    const datos = {
      luces: 0,
      pizarron: 0,
      puertas: 0,
      clima: 0,
      codigoDelClima: ['', ''] // Dos strings vacíos
    };
  
    // Reemplazar el punto por un guion bajo para que sea un nombre de ruta válido
    const salonId = ultimoSalon.replace('.', '_');
  
    try {
      await set(ref(this.database, `salones/${salonId}`), datos);
      console.log(`✅ Datos del salón ${salonId} enviados a Firebase`);
    } catch (error) {
      console.error('❌ Error al enviar a Firebase:', error);
    }
  }

  guardarSenal(valor: number): void {
    localStorage.setItem('registrarSenal', valor.toString());
    this.senalActual = valor;
    this.textoModal = valor === 1 ? 'Registrar Encendido' : 'Registrar Apagado';
    this.mostrarModal = true;
  }

  registrar(): void {
    if (this.senalActual === 1) {
      this.registrarEncendido();
    } else if (this.senalActual === 0) {
      this.registrarApagado();
    }
    this.cerrarModal();
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.textoModal = '';
  }

  registrarEncendido(): void {
    console.log('✅ Señal de encendido registrada.');
  }

  registrarApagado(): void {
    console.log('❌ Señal de apagado registrada.');
  }
}
