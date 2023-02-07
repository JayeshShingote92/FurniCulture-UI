import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/common/services/common.service';
import { ToasterService } from 'src/app/common/services/toaster.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private commonservice: CommonService,private toasterservice: ToasterService) {

  }
  subscribeEmail: string = '';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  onSubmitSubscriber() {
    let subscribeEMailObject = {};
    subscribeEMailObject["Email"] = this.subscribeEmail;
    this.commonservice.addSubscriptionEmail(subscribeEMailObject).subscribe((res: any) => {
      if (res.status == "Success") {
        this.toasterservice.showSuccess("Subscribed email successfully","");
        this.subscribeEmail = "";
      }
    })
  }
}
