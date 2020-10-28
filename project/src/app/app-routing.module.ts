import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//localhost:4200
const routes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
  },

  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

