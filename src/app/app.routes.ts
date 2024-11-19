import { Routes } from '@angular/router';
import { ContratosListComponent } from './components/contratos-list/contratos-list.component';
import { ContratoCreateComponent } from './components/contrato-create/contrato-create.component';

export const routes: Routes = [

    { path: '', redirectTo: 'contratos', pathMatch: 'full' },
    { path: 'contratos', component: ContratosListComponent },
    { path: 'crear', component: ContratoCreateComponent }

];
