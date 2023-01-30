import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slide = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 5000,    
  };  
  slickInit(e: any) {
    console.log('slick initialized');
  }
}
