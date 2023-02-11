import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoUserRoutingModule } from './info-user-routing.module';
import { InfoUserComponent } from './info-user.component';
import { MessageErrorModule } from '../message-error/message-error.module';


@NgModule({
  declarations: [
    InfoUserComponent
  ],
  imports: [
    CommonModule,
    InfoUserRoutingModule,
    MessageErrorModule
  ]
})
export class InfoUserModule { }
