import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'selectors',
    loadChildren: () => import('./slectors-nested/slectors-nested.module').then( m => m.SlectorsNestedModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
