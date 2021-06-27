import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { DinamycComponent } from './dinamyc/dinamyc.component';
import { SwitchsComponent } from './switchs/switchs.component';


@NgModule({
  declarations: [BasicsComponent, DinamycComponent, SwitchsComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
