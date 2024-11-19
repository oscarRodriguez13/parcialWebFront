// contrato-create.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/Contrato';
import { CommonModule } from '@angular/common'; 

@Component({
  standalone: true,
  selector: 'app-contrato-create',
  imports: [CommonModule],
  templateUrl: './contrato-create.component.html',
  styleUrls: ['./contrato-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContratoCreateComponent implements OnInit {

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
  
  constructor(private contratoService: ContratoService, private router: Router) { }

  ngOnInit(): void {
    // Inicialización si es necesario
  }

  onSubmit(): void {
    this.contratoService.createContrato(this.contrato).subscribe(
      (response) => {
        // Después de crear el contrato, redirigir al listado de contratos
        this.router.navigate(['/contratos']);
      },
      (error) => {
        console.error('Error al crear el contrato', error);
      }
    );
  }
}
