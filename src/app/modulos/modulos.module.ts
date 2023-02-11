import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersModule } from './list-users/list-users.module';
import { MessageErrorModule } from './message-error/message-error.module';

@NgModule({
  declarations: [
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListUsersModule,
    MessageErrorModule,
  ]
})
export class ModulosModule { }
