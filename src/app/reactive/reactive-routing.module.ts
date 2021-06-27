import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DinamycComponent } from './dinamyc/dinamyc.component';
import { SwitchsComponent } from './switchs/switchs.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basics', component: BasicsComponent },
      { path: 'dinamyc', component: DinamycComponent },
      { path: 'switchs', component: SwitchsComponent },
      { path: '**', redirectTo: 'basics'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReactiveRoutingModule { }
