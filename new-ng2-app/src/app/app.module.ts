import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridListDynamicComponent } from './grid-list-dynamic/grid-list-dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    GridListDynamicComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
