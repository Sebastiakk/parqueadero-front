import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';

const vistaPrincipal: string = 'listar';

const routes: Routes = [
  {
    path: vistaPrincipal, component: ListarVehiculosComponent,
  },
  {
    path: 'crear', component: CrearVehiculoComponent,
  },
  {
    path: '**',
    redirectTo: vistaPrincipal,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParqueaderoRoutingModule { }
