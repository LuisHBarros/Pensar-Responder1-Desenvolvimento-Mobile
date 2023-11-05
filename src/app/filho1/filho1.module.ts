import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { NetoComponent } from './neto/neto.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports:[RouterModule],
  exports:[CommonModule],
  declarations:[NetoComponent, ],
  providers:[]
})
export class Filho1Module{}
