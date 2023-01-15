import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  slidetestimonial = {  
    "slidesToShow": 3,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "arrows": true,
    "autoplay": true,
    "autoplaySpeed": 1000, 
  };  
  slickInit(e: any) {
    console.log('slick initialized');
  }
}
