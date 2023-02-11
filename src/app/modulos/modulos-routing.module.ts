import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardScoreGuard } from '../guards/guard-score.guard';
import { ModulosComponent } from './modulos.component';

const routes: Routes = [{
  path: '',
  component: ModulosComponent
}, {
  path: 'perfil/:login/:score',
  loadChildren: () => import('./info-user/info-user.module').then(m => m.InfoUserModule),
  canActivate: [GuardScoreGuard]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
