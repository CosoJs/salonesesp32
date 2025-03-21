import { Component, OnInit } from '@angular/core';
import { Database, ref, get, update } from '@angular/fire/database';

@Component({
  selector: 'app-parte2',
  standalone: true,
  templateUrl: './parte2.component.html',
  styleUrl: './parte2.component.css'
})
export class Parte2Component implements OnInit {
  salonId: string = '';
  datosSalon: any = { pizarron: 0, clima: 0, luces: 0, puertas: 'Cerrada' };

  constructor(private db: Database) {}

  ngOnInit() {
    this.salonId = localStorage.getItem('salonSeleccionado') || '';
    if (this.salonId) {
      const salonRef = ref(this.db, `salones/${this.salonId}`);
      get(salonRef).then(snapshot => {
        if (snapshot.exists()) {
          this.datosSalon = snapshot.val();
        }
      });
    }
  }

  actualizarValor(campo: string, valor: number | string) {
    this.datosSalon[campo] = valor;
  }

  subirCambios() {
    if (!this.salonId) return;
    
    const salonRef = ref(this.db, `salones/${this.salonId}`);
    update(salonRef, this.datosSalon)
      .then(() => alert('Datos actualizados correctamente'))
      .catch(error => console.error('Error al actualizar:', error));
  }
}
