import { Routes } from '@angular/router';
import { FormComponent } from './view/form/form.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import {InformationComponent} from "./view/information/information.component";

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'information', component: InformationComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
