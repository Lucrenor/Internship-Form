import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './view/form/form.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./view/navbar/navbar.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    FormComponent,
    AppRoutingModule,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
