import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos.component';

const routes: Routes = [{
  path: '',
  component: ModulosComponent
}, {
  path: 'perfil/:login',
  loadChildren: () => import('./info-user/info-user.module').then(m => m.InfoUserModule)
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
