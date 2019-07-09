import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraRoutingModule } from './barra-routing.module';
import { BarraComponent } from './barra.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [BarraComponent],
  imports: [
    CommonModule,
    BarraRoutingModule,
    AngularMaterialModule,
  ]
})

export class BarraModule { }
