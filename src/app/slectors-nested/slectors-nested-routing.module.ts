import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';


const routes: Routes = [
  {
    path: '',
    component: SelectorPageComponent
  },
  {
    path: '**',
    redirectTo: 'selectors'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlectorsNestedRoutingModule { }
