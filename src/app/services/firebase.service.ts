import { Injectable } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';
import { environment } from '../../environments/environment';  // Asegúrate de que la configuración de Firebase esté en environment.ts

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: Database) {}

  // Método para enviar el mensaje
  sendMessage(message: string) {
    const messageRef = ref(this.db, 'messages/');  // Ruta donde guardamos los mensajes
    const newMessage = {
      content: message,
      timestamp: new Date().toISOString()
    };

    // Guardar el mensaje en Firebase
    return set(messageRef, newMessage);
  }
}
