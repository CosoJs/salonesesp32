import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"salonesesp32","appId":"1:85054449957:web:a163d733e8553bb4d012cc","databaseURL":"https://salonesesp32-default-rtdb.firebaseio.com","storageBucket":"salonesesp32.firebasestorage.app","apiKey":"AIzaSyCkMmcNeC1n7dLGEfUyeAW6xnkbqmeKJAs","authDomain":"salonesesp32.firebaseapp.com","messagingSenderId":"85054449957"})), provideDatabase(() => getDatabase())]
};
