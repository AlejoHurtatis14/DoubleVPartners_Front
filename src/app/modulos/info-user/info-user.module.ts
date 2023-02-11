import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoUserRoutingModule } from './info-user-routing.module';
import { InfoUserComponent } from './info-user.component';


@NgModule({
  declarations: [
    InfoUserComponent
  ],
  imports: [
    CommonModule,
    InfoUserRoutingModule
  ]
})
export class InfoUserModule { }
