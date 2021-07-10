import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlectorsNestedRoutingModule } from './slectors-nested-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SelectorPageComponent],
  imports: [
    CommonModule,
    SlectorsNestedRoutingModule,
    ReactiveFormsModule
  ]
})
export class SlectorsNestedModule { }
