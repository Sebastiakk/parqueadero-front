import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVehiculosComponent } from './component/listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculoComponent } from './component/crear-vehiculo/crear-vehiculo.component';


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
    redirectTo: vistaPrincipal
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
