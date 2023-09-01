import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { CriarNotaComponent } from './componentes/criar-nota/criar-nota.component';


const routes: Routes = [
  {
    path: 'home',
    component: CorpoComponent
  },
  {
    path: 'criar-nota',
    component: CriarNotaComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
