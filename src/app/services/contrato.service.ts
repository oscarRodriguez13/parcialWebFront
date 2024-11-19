// contrato.service.ts

import { Contrato } from './../models/Contrato'; 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Asegúrate de importar HttpClient
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'  // Asegúrate de que el servicio esté disponible en toda la aplicación
})
export class ContratoService {
  private apiUrl = 'http://localhost:8084/api/contratos';  // La URL de tu API

  constructor(private http: HttpClient) { }  // Inyección de HttpClient

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl);
  }
}
