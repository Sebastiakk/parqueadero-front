import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const vistaPrincipal: string = '🏠';

const routes: Routes = [
  {
    path: vistaPrincipal,
    loadChildren: () => import('./component/barra/barra.module').then(module => module.BarraModule),
  },
  {
    path: '**',
    redirectTo: vistaPrincipal,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
