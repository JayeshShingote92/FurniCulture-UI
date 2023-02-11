import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomizedmoduleComponent } from './pages/customizedmodule/customizedmodule.component';
import { DesignloginComponent } from './pages/designlogin/designlogin.component';
import { ProductandservicesComponent } from './pages/productandservices/productandservices.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ExchangemoduleComponent } from './pages/exchangemodule/exchangemodule.component';
import { ConvertingmoduleComponent } from './pages/convertingmodule/convertingmodule.component';
import { AntiquemoduleComponent } from './pages/antiquemodule/antiquemodule.component';
import { EnquiryComponent } from './sharepage/enquiry/enquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    CareerComponent,
    ContactComponent,
    CustomizedmoduleComponent,
    DesignloginComponent,
    ProductandservicesComponent,
    TestimonialComponent,
    ExchangemoduleComponent,
    ConvertingmoduleComponent,
    AntiquemoduleComponent,
    EnquiryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000, // 10 seconds
      closeButton: false,
      progressBar: false,
    }
    ),
    NgbModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
