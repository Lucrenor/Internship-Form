import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/form/form.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import {InformationComponent} from "./view/information/information.component";

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'information', component: InformationComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
