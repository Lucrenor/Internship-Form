import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './view/navbar/navbar.component';
import {FormComponent} from "./view/form/form.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FormComponent,
  ],
  standalone: true
})
export class AppComponent {}
