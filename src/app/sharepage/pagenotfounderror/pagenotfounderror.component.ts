import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagenotfounderror',
  templateUrl: './pagenotfounderror.component.html',
  styleUrls: ['./pagenotfounderror.component.css']
})
export class PagenotfounderrorComponent {
  constructor(private location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this.location.back();
  }

}
