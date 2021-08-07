import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
