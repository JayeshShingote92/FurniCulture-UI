import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { AboutusComponent } from '../app/pages/aboutus/aboutus.component';
import { ProductandservicesComponent } from '../app/pages/productandservices/productandservices.component';
import { ContactComponent } from '../app/pages/contact/contact.component';
import { CareerComponent } from '../app/pages/career/career.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'productadservices', component: ProductandservicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
