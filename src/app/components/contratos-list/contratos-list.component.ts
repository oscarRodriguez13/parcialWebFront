// contratos-list.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contrato } from '../../models/Contrato';
import { ContratoService } from '../../services/contrato.service'; 
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-contratos-list',
  imports: [CommonModule],
  templateUrl: './contratos-list.component.html',
  styleUrls: ['./contratos-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContratosListComponent implements OnInit {

  contratos: Contrato[] = [];  // Arreglo para almacenar los contratos
  errorMessage: string = '';  // Variable para manejar errores

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    // Al inicializar el componente, obtenemos los contratos
    this.contratoService.getContratos().subscribe(
      (data: Contrato[]) => {
        this.contratos = data;  // Asignamos los contratos a la variable
      },
      (error) => {
        this.errorMessage = 'Error al cargar los contratos';  // Manejo de errores
      }
    );
  }
}
