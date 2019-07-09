import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraComponent } from './barra.component';

const vistaPrincipal: string = 'Parqueadero';

const routes: Routes = [
  {
    path: vistaPrincipal,
    component: BarraComponent,
    loadChildren: () => import('../parqueadero/parqueadero.module').then(module => module.ParqueaderoModule)
  }, {
    path: '**',
    redirectTo: vistaPrincipal,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarraRoutingModule { }
