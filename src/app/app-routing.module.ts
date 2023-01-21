import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntromoduleComponent } from './pages/intromodule/intromodule.component';
import { InnovationmoduleComponent } from './pages/innovationmodule/innovationmodule.component';
import { AntiquemoduleComponent } from './pages/antiquemodule/antiquemodule.component';
import { ExchangemoduleComponent } from './pages/exchangemodule/exchangemodule.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductandservicesComponent } from './pages/productandservices/productandservices.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { PagenotfounderrorComponent } from './sharepage/pagenotfounderror/pagenotfounderror.component';
const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntromoduleComponent },
  { path: "innovative", component:InnovationmoduleComponent},
  { path: "antique", component:AntiquemoduleComponent},
  { path: "exchange", component:ExchangemoduleComponent},
  { path: "aboutus", component:AboutusComponent},
  { path: "productandservice", component:ProductandservicesComponent},
  { path: "testimonial", component:TestimonialComponent},
  // { path: "**", component: PagenotfounderrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
