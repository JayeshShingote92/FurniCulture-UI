import { Component } from '@angular/core';

@Component({
  selector: 'app-productandservices',
  templateUrl: './productandservices.component.html',
  styleUrls: ['./productandservices.component.css']
})
export class ProductandservicesComponent {
  slideConfig = {  
    "slidesToShow": 4,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true,
    // "nextArrow": "<div class='nav-btn next-slide'></div>",
    // "prevArrow": "<div class='nav-btn prev-slide'></div>",
  };  
  slickInit(e: any) {
    console.log('slick initialized');
  }
}
