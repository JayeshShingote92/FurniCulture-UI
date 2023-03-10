import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Enquiry } from 'src/app/common/models/enquiry.model'
import { CommonService } from 'src/app/common/services/common.service';
import { ToasterService } from 'src/app/common/services/toaster.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent implements OnInit {
  emailId: string;
  registrationFlag: boolean = false;
  nameFlag: boolean = false;
  cityFlag: boolean = false;
  emailFlag: boolean = false;
  messageFlag: boolean = false;
  contactnoFlag: boolean = false;

  userName: string = 'Jayesh';
  userEmailId: string = 'jayeshshingote';
  @Input() moduleName: string;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  customerEnquireDetailObj: Enquiry;
  enquiryForm: Enquiry = {
    name: '',
    city: '',
    contactNumber: '',
    email: '',
    message: '',
    pageName: ''
  };


  constructor(private commonservice: CommonService, private toasterservice: ToasterService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.customerEnquireDetailObj = <Enquiry>{};
  }


  onSubmit() {
    console.log(this.moduleName);
    if (this.enquiryForm.name == undefined || this.enquiryForm.name == '') {
      this.nameFlag = true;
    }
    if (this.enquiryForm.city == undefined  || this.enquiryForm.city == '') {
      this.cityFlag = true;
    }
    if (this.enquiryForm.email == undefined || this.enquiryForm.email == '') {
      this.emailFlag = true;
    }
    if (this.enquiryForm.contactNumber == undefined || this.enquiryForm.contactNumber == '') {
      this.contactnoFlag = true;
    }
    if (this.enquiryForm.message == undefined || this.enquiryForm.message == '') {
      this.messageFlag = true;
    }
    else {
      console.log("enquiryForm " + this.enquiryForm);
      this.customerEnquireDetailObj.name = this.enquiryForm.name;
      this.customerEnquireDetailObj.city = this.enquiryForm.city;
      this.customerEnquireDetailObj.email = this.enquiryForm.email;
      this.customerEnquireDetailObj.contactNumber = this.enquiryForm.contactNumber;
      this.customerEnquireDetailObj.message = this.enquiryForm.message;
      this.customerEnquireDetailObj.pageName = this.moduleName;
      console.log("customerEnquireDetailObj " + this.customerEnquireDetailObj);
      this.commonservice.addCustomerEnquiry(this.customerEnquireDetailObj).subscribe((res: any) => {
        if (res.status == "Success") {
          this.toasterservice.showSuccess("Enquiry save successfully", "");
          this.registrationFlag = true;
          this.userName = this.enquiryForm.name;
          this.userEmailId = this.enquiryForm.email;
          this.resetForm();
        }
        else {
          this.toasterservice.showError("Something went wrong", "");
        }
      })
    }
  }

  resetForm() {
    this.nameFlag = false;
    this.cityFlag = false;
    this.emailFlag = false;
    this.contactnoFlag = false;
    this.messageFlag = false;
    this.enquiryForm.name = '';
    this.enquiryForm.city = '';
    this.enquiryForm.email = '';
    this.enquiryForm.contactNumber = '';
    this.enquiryForm.message = '';
    this.enquiryForm.pageName = '';
  }
}
