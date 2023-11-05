import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Filho1Component } from './filho1/filho1.component';
import { NetoComponent } from './filho1/neto/neto.component';

const routes: Routes = [
  {
    path: 'filho1', component: Filho1Component, children:[{
      path: 'neto', component: NetoComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
