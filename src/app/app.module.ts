import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Filho1Module } from './filho1/filho1.module';
import { NetoComponent } from './filho1/neto/neto.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Filho1Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
