import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListClientsComponent } from './list-clients/list-clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';


//localhost:4200/clientes
const routes: Routes = [
  {
    path: '',
    component: ListClientsComponent
  },

  {
    path: 'novo',
    component: NewClientComponent
  },
  {
    path: 'alterar/:codCliente',
    component: EditClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
