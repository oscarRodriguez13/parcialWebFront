import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ContratosListComponent } from './components/contratos-list/contratos-list.component';
import { ContratoCreateComponent } from './components/contrato-create/contrato-create.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContratosListComponent, ContratoCreateComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcialWebFront';
}
