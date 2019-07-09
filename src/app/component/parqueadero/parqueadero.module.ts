import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { ParqueaderoComponent } from './parqueadero.component';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    ParqueaderoComponent,
    CrearVehiculoComponent,
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParqueaderoRoutingModule,
    AngularMaterialModule
  ]
})
export class ParqueaderoModule { }
