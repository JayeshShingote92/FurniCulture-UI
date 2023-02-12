import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common/services/common.service';
import { ToasterService } from 'src/app/common/services/toaster.service';
import { PromptDialogComponent } from 'src/app/common/components/prompt-dialog/prompt-dialog.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PromptDialogComponent]
})
export class HomeComponent {
  emailId: string;
  activationCode: string;
  formModal: any;
  constructor(private modalService: NgbModal,private commonservice: CommonService,private toasterservice: ToasterService, private route: ActivatedRoute,public promptDialogComponent: PromptDialogComponent) { 
    this.route.queryParams
    .subscribe(params => {
      console.log(params.emailId);
      this.emailId = params.emailId;
      this.activationCode = params.activationCode;
      if (this.emailId != undefined || this.emailId != null) {
        this.verifySubscribedEmail(this.emailId);
      }
      if((this.emailId != undefined || this.emailId != '') && (this.activationCode != undefined && this.activationCode != '')){
        this.verifyRegisteredUser(this.activationCode,this.emailId);
      }
    });
  }

  verifySubscribedEmail(emailId: string) {
    this.commonservice.verifySubscriptionEmail(this.emailId).subscribe((res: any) => {
      if (res.status == "Success") {
        this.promptDialogComponent.showModalDialog();
      //  this.dialogComponent.showModalDialog(); 
        this.toasterservice.showSuccess("user subscribe successfull", "");
        this.emailId = '';
      }
      else {
        this.toasterservice.showError("user subscription fail", "");
      }
    })
  }

  verifyRegisteredUser(activationCode:string,emailId: string) {
    this.commonservice.verifyUserRegistration(this.activationCode,this.emailId).subscribe((res: any) => {
      if (res.status == "Success") {
        this.promptDialogComponent.showModalDialog();
      //  this.dialogComponent.showModalDialog(); 
        this.toasterservice.showSuccess("user verification successfull", "");
        this.emailId = '';
      }
      else {
        this.toasterservice.showError("user verification fail", "");
      }
    })
  }

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
