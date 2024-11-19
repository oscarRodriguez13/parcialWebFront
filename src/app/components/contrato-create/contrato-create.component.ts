import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/Contrato';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contrato-create',
  imports: [FormsModule, CommonModule], // Agrega FormsModule a imports
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css']
})
export class ContratoCreateComponent {
  contrato: Contrato = {
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratantista: '',
    documentoContratantista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  constructor(private contratoService: ContratoService, private router: Router) {}

  onSubmit(): void {
    this.contratoService.saveContrato(this.contrato).subscribe(
      (response) => {
        console.log('Contrato creado exitosamente:', response);
        this.router.navigate(['/contratos']); // Redirige a la lista de contratos
      },
      (error) => {
        console.error('Error al crear el contrato:', error);
      }
    );
  }
}
